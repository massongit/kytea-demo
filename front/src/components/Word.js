import React from "react"
import PropTypes from "prop-types"
import {Button, DropdownButton, MenuItem} from "react-bootstrap"
import {intlShape} from "react-intl"
import {propTypesPart} from "./App"
import {showPOSAndPronunciation} from "../actions"

/**
 * Sentenceの各ボタン
 */
class Word extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        word: PropTypes.string,
        intl: intlShape.isRequired,
        ...propTypesPart
    }

    /**
     * onClickイベント
     * @param n {number} 候補No (0起点)
     */
    onClick(n) {
        // 品詞や読みの表示Actionをdispatchする
        this.props.dispatch(showPOSAndPronunciation({
            number: n + 1,
            word: this.props.word,
            pos: this.props.pos,
            pronunciation: this.props.pronunciation[n]
        }))
    }

    /**
     * ボタン内のテキストを取得する
     * @param text {string} ボタン内のテキスト
     * @param n {number} 候補No (0起点)
     * @returns {string|element} ボタン内のテキスト
     */
    getButtonText(text, n) {
        if (this.props.pronunciation[n] && this.props.pronunciation[n].id) { // 読みが予測されているとき、文字列を強調
            return (
                <strong>
                    <u>
                        {text}
                    </u>
                </strong>
            )
        } else {
            return text
        }
    }

    /**
     * Buttonを描画する
     * @returns {node} Button
     */
    renderButton() {
        return (
            <Button
                onClick={() => {
                    this.onClick(0)
                }}
            >
                {this.getButtonText(this.props.word, 0)}
            </Button>
        )
    }

    /**
     * DropdownButtonを描画する
     * @returns {node} DropdownButton
     */
    renderDropdownButton() {
        return (
            <DropdownButton
                title={this.props.word}
            >
                {
                    (() => {
                        // MenuItemのリスト
                        const menuItems = []

                        for (let i = 0; i < this.props.pronunciation.length; i++) {
                            // 今見ている読みが0番目の読みでないとき、区切り線をリストに追加
                            if (0 < i) {
                                menuItems.push(<MenuItem divider/>)
                            }

                            // MenuItemをリストに追加
                            menuItems.push(this.renderMenuItem(i))
                        }

                        return menuItems
                    })()
                }
            </DropdownButton>
        )
    }

    /**
     * MenuItemを描画する
     * @param n 候補No
     * @returns {node} MenuItem
     */
    renderMenuItem(n) {
        return (
            <MenuItem
                key={n}
                onClick={() => {
                    this.onClick(n)
                }}
            >
                {
                    this.getButtonText(this.props.intl.formatMessage({
                        id: "candidate"
                    },
                    {
                        no: this.props.intl.formatNumber(n + 1)
                    }), n)
                }
            </MenuItem>
        )
    }

    render() {
        if (this.props.pronunciation.length < 2) { // 読みの候補が複数存在しないとき、Buttonを出力
            return this.renderButton()
        } else { // 読みの候補が複数存在するとき、DropdownButtonを出力
            return this.renderDropdownButton()
        }
    }
}

export default Word
