import React from "react"
import PropTypes from "prop-types"
import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"
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

    constructor(props) {
        super(props)
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.state = {
            dropdownOpen: false
        }
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
     * Dropdownの状態を切り替える
     */
    toggleDropdown() {
        this.setState(state => ({
            dropdownOpen: !state.dropdownOpen
        }))
    }

    /**
     * DropdownItemのリストを生成する
     * @returns {Array} DropdownItemのリスト
     */
    generateDropDownItems() {
        const dropdownItems = []

        for (let i = 0; i < this.props.pronunciation.length; i++) {
            // 今見ている読みが0番目の読みでないとき、区切り線をリストに追加
            if (0 < i) {
                dropdownItems.push(<DropdownItem divider/>)
            }

            // DropdownItemをリストに追加
            dropdownItems.push(this.renderDropdownItem(i))
        }

        return dropdownItems
    }

    /**
     * Buttonを描画する
     * @returns {node} Button
     */
    renderButton() {
        return (
            <Button
                outline
                color="dark"
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
            <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
            >
                <DropdownToggle
                    caret
                    color="outline-dark"
                >
                    {this.props.word}
                </DropdownToggle>
                <DropdownMenu>
                    {this.generateDropDownItems()}
                </DropdownMenu>
            </ButtonDropdown>
        )
    }

    /**
     * DropdownItemを描画する
     * @param n 候補No
     * @returns {node} DropdownItem
     */
    renderDropdownItem(n) {
        return (
            <DropdownItem
                key={n}
                onClick={() => {
                    this.onClick(n)
                }}
            >
                {
                    this.getButtonText(this.props.intl.formatMessage(
                        {
                            id: "candidate"
                        },
                        {
                            no: this.props.intl.formatNumber(n + 1)
                        }
                    ), n)
                }
            </DropdownItem>
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
