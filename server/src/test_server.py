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
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': 'ほんじつ'
                }
            ],
            'word': '本日'
        },
        {
            'pos': '助詞',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': 'は'
                }
            ],
            'word': 'は'
        },
        {
            'pos': '名詞',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': 'せいてん'
                }
            ],
            'word': '晴天'
        },
        {
            'pos': '助動詞',
            'pronunciation': [
                {
                    'margin': 0.9999511421247065,
                    'pronunciation': 'な'
                },
                {
                    'margin': 0.0,
                    'pronunciation': 'らな'
                }
            ],
            'word': 'な'
        },
        {
            'pos': '語尾',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': 'り'
                }
            ],
            'word': 'り'
        },
        {
            'pos': '補助記号',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': '。'
                }
            ],
            'word': '。'
        }
    ]


def test_analysis_kytea_with_unknown_word(client):
    """
    読みが予測不能な単語と空白を含む文を与えたとき、読みが予測不能な単語のpronunciationが空のリストになっており、空白が出力されていない
    :param client: テスト用のクライアント
    """
    res = client.post('/kytea', data='I have a pen.')
    assert res.status_code == 200
    assert res.json == [
        {
            'pos': '補助記号',
            'pronunciation': [
                {
                    'margin': 0.0,
                    'pronunciation': '(Unknown)'
                }
            ],
            'word': 'I'
        },
        {
            'pos': '名詞',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': 'はぶ'
                }
            ],
            'word': 'have'
        },
        {
            'pos': '記号',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': 'Ａ'
                }
            ],
            'word': 'a'
        },
        {
            'pos': '補助記号',
            'pronunciation': [
                {
                    'margin': 0.0,
                    'pronunciation': '(Unknown)'
                }
            ],
            'word': 'pen'
        },
        {
            'pos': '補助記号',
            'pronunciation': [
                {
                    'margin': 100.0,
                    'pronunciation': '。'
                }
            ],
            'word': '.'
        }
    ]
