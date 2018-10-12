import React from "react"
import fetch from "node-fetch"
import PropTypes from "prop-types"
import {Button, Form, Input, InputGroup, InputGroupAddon} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {FormattedMessage, intlShape} from "react-intl"
import {loading, showSentence} from "../actions"
import {faSpinner} from "@fortawesome/free-solid-svg-icons"

/**
 * 入力部
 */
class InputSentence extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        sentence: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        intl: intlShape.isRequired
    }

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /**
     * onSubmitイベント
     * @param ev イベント
     */
    async onSubmit(ev) {
        // サーバーへのSubmitが行われないようにする
        ev.preventDefault()

        this.input.value = this.input.value.trim()

        // 以前の入力文とは異なる文章が入力されたとき
        if (0 < this.input.value.length && this.input.value.replace(/\s/g, "") !== this.props.sentence) {
            // ローディングアイコンを表示する
            this.props.dispatch(loading({
                loading: true
            }))

            // KyTeaによる解析を行い、KyTeaによる解析結果の表示Actionをdispatch
            try {
                this.props.dispatch(showSentence({
                    sentence: this.input.value,
                    words: await this.callKyTea(this.input.value)
                }))
            } catch (er) {
                alert(this.props.intl.formatMessage(
                    {
                        id: "errorMessage.predict"
                    },
                    {
                        message: er.message
                    }
                ))
            }

            // ローディングアイコンを消す
            this.props.dispatch(loading({
                loading: false
            }))
        }
    }

    /**
     * ローディングアイコンを描画する
     * @returns {*} ローディングアイコン
     */
    renderSpinner() {
        if (this.props.loading) {
            return (
                <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                />
            )
        }
    }

    /**
     * KyTeaのAPIを呼び出す
     * @param value {string} 入力文
     * @returns {Promise<*>} 解析結果
     */
    async callKyTea(value) {
        return await (await fetch(
            "kytea",
            {
                method: "POST",
                body: value
            }
        ).then(res => {
            if (res.ok) {
                return res
            } else {
                throw new Error(res.statusText)
            }
        })).json()
    }

    render() {
        return (
            <Form
                onSubmit={this.onSubmit}
            >
                <InputGroup className="mb-3">
                    <Input
                        innerRef={n => {
                            this.input = n
                        }}
                    />
                    <InputGroupAddon addonType="append">
                        <Button
                            type="submit"
                            color="primary"
                            disabled={this.props.loading}
                        >
                            {this.renderSpinner()}
                            <FormattedMessage id="predict"/>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        )
    }
}

export default InputSentence
