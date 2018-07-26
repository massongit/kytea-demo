import React from "react"
import fetch from "node-fetch"
import PropTypes from "prop-types"
import {Button, Form, FormControl, InputGroup} from "react-bootstrap"
import {FormattedMessage, intlShape} from "react-intl"
import {showSentence} from "../actions"

/**
 * 入力部
 */
class Input extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        sentence: PropTypes.string.isRequired,
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

        // 以前の入力文とは異なる文章が入力されたとき、KyTeaによる解析を行い、KyTeaによる解析結果の表示Actionをdispatch
        if (0 < this.input.value.length && this.input.value.replace(/\s/g, "") !== this.props.sentence) {
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
        }
    }

    /**
     * KyTeaのAPIを呼び出す
     * @param value {string} 入力文
     * @returns {Promise<*>} 解析結果
     */
    async callKyTea(value) {
        return await (await fetch(
            "/kytea",
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
                <InputGroup>
                    <FormControl
                        inputRef={n => {
                            this.input = n
                        }}
                    />
                    <InputGroup.Button>
                        <Button type="submit">
                            <FormattedMessage id="predict"/>
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </Form>
        )
    }
}

export default Input
