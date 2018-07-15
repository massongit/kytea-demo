# KyTeaデモプログラム (非公式)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)  
[KyTea](http://www.phontron.com/kytea/index-ja.html)によって予測された品詞や読みを分かりやすく表示するデモプログラム (非公式)

## 作者
Masaya Suzuki <suzukimasaya428@gmail.com>

## バージョン
0.1.0

## 開発言語・主要ライブラリ
### サーバーサイド
* [Python](https://www.python.org/) 3.x
* [Mykytea-python](https://chezou.hatenablog.com/entry/20110715/1310699249)
* [Flask](http://flask.pocoo.org/)

### フロントエンド
* [Node.js](https://nodejs.org/ja/) 8.x
* [node-fetch](https://github.com/bitinn/node-fetch)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [react-redux](https://redux.js.org/basics/usage-with-react)
* [Bootstrap](https://getbootstrap.com/)

## 対応ブラウザ
[browserl.ist: A page to display compatible browsers from a browserslist string.](http://browserl.ist/?q=>+0.5%25%2C+>+0.5%25+in+JP%2C+last+2+versions%2C+Firefox+ESR%2C+not+dead)参照

## 必要なソフトウェア
* [KyTea](http://www.phontron.com/kytea/index-ja.html)
* [Python](https://www.python.org/) 3.x
* [pipenv](https://docs.pipenv.org/) (インストールコマンド: `pip install pipenv`)

## 環境構築方法
1. 端末を起動します。
1. `cd {このディレクトリ}/front`コマンドを実行します。
1. `yarn install`コマンドを実行します。
1. `yarn build`コマンドを実行します。
1. `cd ../server/src`コマンドを実行します。
1. `pipenv install`コマンドを実行します。

## 実行方法
1. 端末を起動します。
1. `cd {このディレクトリ}/server/src`コマンドを実行します。
1. `pipenv shell`コマンドを実行します。
1. `python server.py`コマンドを実行します。
1. ブラウザから[http://localhost:5000/](http://localhost:5000/)にアクセスします。

## スクリーンショット
![](screenshot.png)

## ディレクトリ構造
* front/: フロントエンドのプログラムが格納されている
    * build/: ビルドした内容物が格納されている
    * public/: 静的なファイルが格納されている
        * index.html: フロントエンドのHTML
    * src/: ソースが格納されている
        * \_\_tests\_\_/: テストが格納されている
            * actions/: [Redux](https://redux.js.org/)のActionCreatorのテストが格納されている
                * index.js: ActionCreatorのテスト
            * components/: [React](https://reactjs.org/)のComponentのテストが格納されている
                * Header.js: ヘッダーのテスト
            * containers/: [react-redux](https://redux.js.org/basics/usage-with-react)のContainerのテストが格納されている
                * \_\_snapshots\_\_/: スナップショットテストで用いるデータが格納されている
                * App.js: ルート要素のContainerのテスト
                * Information.js: 解析結果表示部のContainerのテスト
                * Input.js: 入力部のContainerのテスト
                * OutputPanel: 解析結果表示部のパネルのContainerのテスト
                * Sentence.js: 入力文をボタンのグループとして表示するComponentのContainerのテスト
                * Word.js: Sentenceの各ボタンのContainerのテスト
            * reducers/: [Redux](https://redux.js.org/)のReducerのテストが格納されている
                * index.js: ルートReducerのテスト
                * showSentence.js: [KyTea](http://www.phontron.com/kytea/index-ja.html)による解析結果の表示ActionのReducerのテスト
                * showPOSAndPronunciation.js: 品詞や読みの表示ActionのReducerのテスト
        * actions/: [Redux](https://redux.js.org/)のActionCreatorが格納されている
            * index.js: ActionCreator
            * type.js: Actionのタイプ
        * components/: [React](https://reactjs.org/)のComponentが格納されている
            * App.js: ルート要素
            * Header.js: ヘッダー
            * DescriptionPanel.js: 概要パネル
            * Information.js: 解析結果表示部
            * Input.js: 入力部
            * InputPanel.js: 入力部のパネル
            * OutputPanel: 解析結果表示部のパネル
            * Sentence.js: 入力文をボタンのグループとして表示するComponent
            * Word.js: Sentenceの各ボタン
        * containers/: [react-redux](https://redux.js.org/basics/usage-with-react)のContainerが格納されている
            * App.js: ルート要素のContainer
            * Information.js: 解析結果表示部のContainer
            * Input.js: 入力部のContainer
            * OutputPanel: 解析結果表示部のパネルのContainer
            * Sentence.js: 入力文をボタンのグループとして表示するComponentのContainer
            * Word.js: Sentenceの各ボタンのContainer
        * reducers/: [Redux](https://redux.js.org/)のReducerが格納されている
            * index.js: ルートReducer
            * showSentence.js: [KyTea](http://www.phontron.com/kytea/index-ja.html)による解析結果の表示ActionのReducer
            * showPOSAndPronunciation.js: 品詞や読みの表示ActionのReducer
        * index.js: ルートとなるスクリプト
        * setupTests.js: テストの際のセットアップ用スクリプト
    * package.json: [Node.js](https://nodejs.org/ja/)の設定
* server/: サーバーサイドのプログラムが格納されている
    * configs/: 設定が格納されている
        * general.ini: 一般設定
    * logs: ログが格納されている
    * src/: ソースが格納されている
        * config.py: 設定ファイルを扱うためのオブジェクト
        * Pipfile: Pythonのパッケージ情報 ([pipenv](https://docs.pipenv.org/)が使用)
        * server.py: サーバー
        * test_server.py: テスト用スクリプト
* README.md: README (MarkDown形式)
* README_develop.md: 開発者向けREADME (MarkDown形式)
* screenshot.png: スクリーンショット
