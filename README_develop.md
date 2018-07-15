# 開発者向け情報
## 必要なソフトウェア
* [KyTea](http://www.phontron.com/kytea/index-ja.html)
* [Python](https://www.python.org/) 3.x
* [pipenv](https://docs.pipenv.org/) (インストールコマンド: `pip install pipenv`)
* [Node.js](https://nodejs.org/ja/) 8.x
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
        * `action.payload.word`: 単語 (文字列)
        * `action.payload.pos`: 品詞 (文字列)
        * `action.payload.pronunciation`:  読み (文字列)
    * State
        * `state.showPOSAndPronunciation.word`: 単語 (文字列)
        * `state.showPOSAndPronunciation.pos`: 品詞 (文字列)
        * `state.showPOSAndPronunciation.pronunciation`:  読み (文字列)

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
        "pronunciation": "やきゅう",
        "word": "野球"
    },
    {
        "pos": "助詞",
        "pronunciation": "の",
        "word": "の"
    },
    {
        "pos": "名詞",
        "pronunciation": "ＤＨ",
        "word": "ＤＨ"
    },
    {
        "pos": "助詞",
        "pronunciation": "の",
        "word": "の"
    },
    {
        "pos": "形状詞",
        "pronunciation": "せいしき",
        "word": "正式"
    },
    {
        "pos": "名詞",
        "pronunciation": "よびな",
        "word": "呼び名"
    },
    {
        "pos": "助詞",
        "pronunciation": "と",
        "word": "と"
    },
    {
        "pos": "名詞",
        "pronunciation": "いみ",
        "word": "意味"
    },
    {
        "pos": "助詞",
        "pronunciation": "を",
        "word": "を"
    },
    {
        "pos": "動詞",
        "pronunciation": "おしえ",
        "word": "教え"
    },
    {
        "pos": "助詞",
        "pronunciation": "て",
        "word": "て"
    },
    {
        "pos": "動詞",
        "pronunciation": "くださ",
        "word": "くださ"
    },
    {
        "pos": "語尾",
        "pronunciation": "い",
        "word": "い"
    },
    {
        "pos": "補助記号",
        "pronunciation": "。",
        "word": "。"
    }
]
```
