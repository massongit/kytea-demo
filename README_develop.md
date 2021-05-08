# 開発者向け情報
## 必要なソフトウェア
* [KyTea](http://www.phontron.com/kytea/index-ja.html)
* [Python](https://www.python.org/) 3.8
* [pipenv](https://docs.pipenv.org/) (インストールコマンド: `pip install pipenv`)
* [Node.js](https://nodejs.org/ja/) 14.15
* [Yarn](https://yarnpkg.com/ja/)

## URL一覧
|URL|概要|
|:--:|:--:|
|[http://localhost:5000/](http://localhost:5000/)|トップページ|
|http://localhost:5000/kytea/|KyTeaによる解析用API|

## コマンド
### フロントエンド
#### ビルド
1. 端末を起動します。
1. `cd {このディレクトリ}/front`コマンドを実行します。
1. `yarn build`コマンドを実行します。

#### テスト
1. 端末を起動します。
1. `cd {このディレクトリ}/front`コマンドを実行します。
1. `yarn test`コマンドを実行します。

### サーバーサイド
#### テスト
1. 端末を起動します。
1. `cd {このディレクトリ}/server/src`コマンドを実行します。
1. `pipenv install --dev`コマンドを実行します。
1. `pipenv shell`コマンドを実行します。
1. `pytest`コマンドを実行します。

## フロントエンドのAction・State
* showSentence: [KyTea](http://www.phontron.com/kytea/index-ja.html)による解析結果の表示Action
    * Action
        * `action.payload.sentence`: 入力文 (文字列)
        * `action.payload.words`: KyTeaによる解析結果 (KyTeaによる解析用APIのレスポンス)
    * State
        * `state.showSentence.sentence`: 入力文 (文字列)
        * `state.showSentence.words`: KyTeaによる解析結果 (KyTeaによる解析用APIのレスポンス)
* showPOSAndPronunciation: 品詞や読みの表示Action
    * Action
        * `action.payload.number`: 候補No (整数)
        * `action.payload.word`: 単語 (文字列)
        * `action.payload.pos`: 品詞 (文字列)
        * `action.payload.pronunciation`:  読み (配列)
    * State
        * `state.showPOSAndPronunciation.number`: 単語 (整数)
        * `state.showPOSAndPronunciation.word`: 単語 (文字列)
        * `state.showPOSAndPronunciation.pos`: 品詞 (文字列)
        * `state.showPOSAndPronunciation.pronunciation`:  読み (配列)
* loading: ローディングAction
    * Action
        * `action.payload.loading`: KyTeaによる解析結果を取得中かどうか (boolean)
    * State
        * `state.loading.loading`: KyTeaによる解析結果を取得中かどうか (boolean)

## KyTeaによる解析用API
### リクエスト
日本語の文章 (POSTメソッド)

```json
"野球のＤＨの正式呼び名と読みを教えてください。"
```
### レスポンス
各単語に関する情報の配列 (JSON形式)

```json
[
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "やきゅう"
            }
        ],
        "word": "野球"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 2.12891303174829,
                "pronunciation": "の"
            },
            {
                "margin": 0.0,
                "pronunciation": "きの"
            },
            {
                "margin": 0.0,
                "pronunciation": "ゅの"
            }
        ],
        "word": "の"
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "ＤＨ"
            }
        ],
        "word": "ＤＨ"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 2.1760714835829633,
                "pronunciation": "の"
            },
            {
                "margin": 0.0,
                "pronunciation": "きの"
            },
            {
                "margin": 0.0,
                "pronunciation": "ゅの"
            }
        ],
        "word": "の"
    },
    {
        "pos": "形状詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "せいしき"
            }
        ],
        "word": "正式"
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "よびな"
            }
        ],
        "word": "呼び名"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "と"
            }
        ],
        "word": "と"
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "よみ"
            }
        ],
        "word": "読み"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 1.9998295447276375,
                "pronunciation": "を"
            },
            {
                "margin": 0.0,
                "pronunciation": "みを"
            },
            {
                "margin": -5.912806885244315e-05,
                "pronunciation": "くを"
            }
        ],
        "word": "を"
    },
    {
        "pos": "動詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "おしえ"
            }
        ],
        "word": "教え"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "て"
            }
        ],
        "word": "て"
    },
    {
        "pos": "動詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "くださ"
            }
        ],
        "word": "くださ"
    },
    {
        "pos": "語尾",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "い"
            }
        ],
        "word": "い"
    },
    {
        "pos": "補助記号",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "。"
            }
        ],
        "word": "。"
    }
]
```
