# coding=utf-8

"""
サーバーのテスト
"""

import inspect
import json
import pathlib

import pytest

import config
import server

# 作者
__author__ = 'Masaya Suzuki'

# バージョン
__version__ = '0.1.1'


@pytest.fixture
def client():
    """
    テスト用のクライアントを返す
    :return: テスト用のクライアント
    """
    return server.app.test_client()


@pytest.fixture
def conf():
    """
    設定を返す
    :return: 設定
    """
    return config.Config(pathlib.Path.cwd().parent / 'configs')


def test_render_index(client, conf):
    """
    トップページが正常に返される
    :param client: テスト用のクライアント
    """
    res = client.get('/')
    do_test_http_ok(res)
    with (pathlib.Path(conf.get('general', 'front', 'dir path')) / 'index.html').open() as index_file:
        assert res.data.decode() == index_file.read()


def test_analysis_kytea(client, conf):
    """
    KyTeaによる解析が正常に行われる
    :param client: テスト用のクライアント
    :param conf: 設定
    """
    do_kywsd_test(client, conf, '本日は晴天なり。', inspect.currentframe())


def test_analysis_kytea_with_unknown_word(client, conf):
    """
    読みが予測不能な単語と空白を含む文を与えたとき、読みが予測不能な単語のpronunciationが空のリストになっており、空白が出力されていない
    :param client: テスト用のクライアント
    :param conf: 設定
    """
    do_kywsd_test(client, conf, 'I have a pen.', inspect.currentframe())


def do_kywsd_test(client, conf, sentence, frame):
    """
    KyWSDによる解析のテストを行う
    :param client: テスト用のクライアント
    :param conf: 設定
    :param sentence: POSTする文字列
    :param frame: fname (inspect.currentframe()を指定)
    """
    res = client.post('/kytea', data=sentence)
    do_test_http_ok(res)
    with (pathlib.Path(conf.get('general', 'test', 'json dir path'))
          / (inspect.getframeinfo(frame)[2] + '.json')).open() as json_file:
        assert res.json == json.load(json_file)


def do_test_http_ok(res):
    """
    レスポンスが200 OKを返すかどうかのテストを行う
    :param res: レスポンス
    """
    assert res.status_code == 200
