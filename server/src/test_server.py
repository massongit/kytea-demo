# coding=utf-8

"""
サーバーのテスト
"""

import pathlib

import pytest

import server

# 作者
__author__ = 'Masaya Suzuki'

# バージョン
__version__ = '0.1.0'


@pytest.fixture
def client():
    """
    テスト用のクライアントを返す
    :return: テスト用のクライアント
    """
    return server.app.test_client()


def test_render_index(client):
    """
    トップページが正常に返される
    :param client: テスト用のクライアント
    """
    res = client.get('/')
    assert res.status_code == 200
    with (pathlib.Path(server.conf.get('general', 'front', 'dir path')) / 'index.html').open() as index_file:
        assert res.data.decode() == index_file.read()


def test_analysis_kytea(client):
    """
    KyTeaによる解析が正常に行われる
    :param client: テスト用のクライアント
    """
    res = client.post('/kytea', data='本日は晴天なり。')
    assert res.status_code == 200
    assert res.json == [
        {
            'pos': '名詞',
            'word': '本日',
            'pronunciation': 'ほんじつ'
        },
        {
            'pos': '助詞',
            'word': 'は',
            'pronunciation': 'は'
        },
        {
            'pos': '名詞',
            'word': '晴天',
            'pronunciation': 'せいてん'
        },
        {
            'pos': '助動詞',
            'word': 'な',
            'pronunciation': 'な'
        },
        {
            'pos': '語尾',
            'word': 'り',
            'pronunciation': 'り'
        },
        {
            'pos': '補助記号',
            'word': '。',
            'pronunciation': '。'
        }
    ]
