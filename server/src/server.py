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
import flask_api.status
import flask_classy

import configs

# 作者
__author__ = 'Masaya Suzuki'

# バージョン
__version__ = '0.1.6'

# 設定
conf = configs.Config(pathlib.Path.cwd().parent / 'configs')

app = flask.Flask(__name__, conf.get('general', 'front', 'url'), conf.get('general', 'front', 'dir path'))


def output_http_data(headers, body):
    """
    HTTPデータ (リクエストやレスポンス) の内容を出力する
    :param headers: HTTPデータ (リクエストやレスポンス) のheader
    :param body: HTTPデータ (リクエストやレスポンス) のbody
    """
    app.logger.debug('[Header]')

    for header in headers:
        app.logger.debug('{}: {}'.format(*header))

    app.logger.debug(os.linesep.join(['[Data]',
                                      json.dumps(body, indent=4, ensure_ascii=False, sort_keys=True)]))


def convert_tag(tag):
    """
    タグをレスポンス用の形式に変換する
    :param tag: KyTeaが出力したタグ
    :return: レスポンス用のタグ
    """
    if tag == '0':  # 0タグが付与されたとき
        return ''
    elif tag == 'UNK':  # タグがUnknownなとき
        return '(Unknown)'
    else:  # タグが付与されたとき
        return tag


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

    def _make_responce(self, request):
        """
        レスポンスを生成する
        :param request: リクエスト
        :return: レスポンス
        """
        # レスポンス
        responce = list()

        # KyTeaによる解析を行い、その結果を処理
        for word_data in self.kytea.getAllTags(request.strip()):
            word_data.surface = word_data.surface.strip()
            if word_data.surface:
                responce.append({'word': word_data.surface,
                                 'pos': convert_tag(word_data.tag[0][0][0]),
                                 'pronunciation': [{'margin': margin, 'pronunciation': convert_tag(tag)}
                                                   for tag, margin in word_data.tag[1]]})

        return responce

    def post(self):
        try:
            app.logger.debug('/kytea/ called!')

            # リクエスト
            request = flask.request.get_data(as_text=True)

            app.logger.debug('<Request>')
            output_http_data(flask.request.headers, request)

            response = flask.jsonify(self._make_responce(request))
            response.status_code = flask_api.status.HTTP_200_OK
            response.headers['Access-Control-Allow-Origin'] = '*'

            app.logger.debug('<Response>')
            app.logger.debug('[Status]')
            app.logger.debug(response.status)
            output_http_data(response.headers, response.json)

            return response
        except Exception as e:
            app.logger.exception(e)
            flask.abort(flask_api.status.HTTP_500_INTERNAL_SERVER_ERROR)


if __name__ == '__main__':
    # RootLoggerのログレベルをDEBUGに設定
    logging.root.setLevel(logging.DEBUG)

    # RootLoggerにハンドラをセット
    for handler in [logging.StreamHandler(),
                    logging.FileHandler(str(pathlib.Path(conf.get('general', 'log', 'path'))
                                            / (datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S') + '.log')))]:
        handler.setLevel(logging.root.getEffectiveLevel())
        handler.setFormatter(logging.Formatter('[%(name)s %(asctime)s %(levelname)s] %(message)s'))
        logging.root.addHandler(handler)

KyTeaView.register(app)

if __name__ == '__main__':
    app.run(conf.get('general', 'server', 'host'), conf.get('general', 'server', 'port'), True, use_reloader=False)
