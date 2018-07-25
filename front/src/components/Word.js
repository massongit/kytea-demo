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

    render() {
        if (this.props.pronunciation.length < 2) { // 読みの候補が複数存在しないとき、Buttonを出力
            return (
                <Button
                    onClick={() => {
                        this.onClick(0)
                    }}
                >
                    {this.getButtonText(this.props.word, 0)}
                </Button>
            )
        } else { // 読みの候補が複数存在するとき、DropdownButtonを出力
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
                                menuItems.push(
                                    <MenuItem
                                        key={i}
                                        onClick={() => {
                                            this.onClick(i)
                                        }}
                                    >
                                        {
                                            this.getButtonText(this.props.intl.formatMessage({
                                                id: "candidate"
                                            },
                                            {
                                                no: this.props.intl.formatNumber(i + 1)
                                            }), i)
                                        }
                                    </MenuItem>
                                )
                            }

                            return menuItems
                        })()
                    }
                </DropdownButton>
            )
        }
    }
}

export default Word
