# coding=utf-8

"""
サーバー
"""

import datetime
import json
import logging
import os
import pathlib

import Mykytea
import flask
import flask_classy

import config

# 作者
__author__ = 'Masaya Suzuki'

# バージョン
__version__ = '0.1.0'

# 設定
conf = config.Config(pathlib.Path.cwd().parent / 'configs')

app = flask.Flask(__name__, conf.get('general', 'front', 'url'), conf.get('general', 'front', 'dir path'))


@app.route('/')
def index():
    """
    トップページを表示
    :return: トップページ
    """
    app.logger.debug('/ called!')
    return app.send_static_file('index.html')


class KyTeaView(flask_classy.FlaskView):
    """
    KyTeaによる解析結果を返すView
    """

    trailing_slash = False

    def __init__(self):
        # KyTea
        self.kytea = Mykytea.Mykytea('')

    def post(self):
        try:
            app.logger.debug('/kytea/ called!')
            app.logger.debug('<Request>')
            app.logger.debug('[Header]')

            for header in flask.request.headers:
                app.logger.debug('{}: {}'.format(header[0], header[1]))

            # リクエスト
            request = flask.request.get_data(as_text=True)

            try:
                request = json.loads(request)
            except json.JSONDecodeError:
                pass

            app.logger.debug(os.linesep.join(['[Data]', json.dumps(request, indent=4,
                                                                   ensure_ascii=False, sort_keys=True)]))

            if isinstance(request, str):
                # レスポンス
                responce = list()

                # KyTeaによる解析を行い、その結果を処理
                for word_data in self.kytea.getTags(request.strip()):
                    # 単語のレスポンス
                    responce_word = {'word': word_data.surface}

                    # 品詞と読みを単語のレスポンスに追加
                    for key, tag in zip(['pos', 'pronunciation'], word_data.tag):
                        tag = tag[0][0]
                        if tag not in ['0', 'UNK']:  # タグが付与されているとき
                            responce_word[key] = tag
                        else:  # タグが付与されていないとき
                            responce_word[key] = ''

                    responce.append(responce_word)

                response = flask.jsonify(responce)
                response.status_code = 200
                response.headers['Access-Control-Allow-Origin'] = '*'

                app.logger.debug('<Response>')
                app.logger.debug('[Status]')
                app.logger.debug(response.status)
                app.logger.debug('[Header]')

                for header in response.headers:
                    app.logger.debug('{}: {}'.format(header[0], header[1]))

                app.logger.debug(os.linesep.join(['[Data]', json.dumps(response.json, indent=4,
                                                                       ensure_ascii=False, sort_keys=True)]))

                return response
            else:
                raise TypeError('The request type must be a {}, but it was a {}.'.format(str, type(request)))
        except Exception as e:
            app.logger.exception(e)
            flask.abort(400)


KyTeaView.register(app)


def main():
    """
    メイン関数
    """
    # RootLoggerのログレベルをDEBUGに設定
    logging.root.setLevel(logging.DEBUG)

    # RootLoggerにハンドラをセット
    for handler in [logging.StreamHandler(),
                    logging.FileHandler(str(pathlib.Path(conf.get('general', 'log', 'path'))
                                            / (datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S') + '.log')))]:
        handler.setLevel(logging.root.getEffectiveLevel())
        handler.setFormatter(logging.Formatter('[%(name)s %(asctime)s %(levelname)s] %(message)s'))
        logging.root.addHandler(handler)

    app.run(conf.get('general', 'server', 'host'), conf.get('general', 'server', 'port'), True)


if __name__ == '__main__':
    main()
