import React from "react"
import fetch from "node-fetch"
import PropTypes from "prop-types"
import {Button, Form, FormControl, InputGroup} from "react-bootstrap"
import {showSentence} from "../actions"

/**
 * 入力部
 */
class Input extends React.Component {
    render() {
        return (
            <Form
                onSubmit={async ev => {
                    // サーバーへのSubmitが行われないようにする
                    ev.preventDefault()

                    this.input.value = this.input.value.trim()

                    // 以前の入力文とは異なる文章が入力されたとき、KyTeaによる解析を行い、KyTeaによる解析結果の表示Actionをdispatchする
                    if (0 < this.input.value.length && this.input.value !== this.props.sentence) {
                        try {
                            this.props.dispatch(showSentence({
                                sentence: this.input.value,
                                words: await (await fetch(
                                    "/kytea",
                                    {
                                        method: "POST",
                                        body: this.input.value
                                    }
                                ).then(res => {
                                    if (res.ok) {
                                        return res
                                    } else {
                                        throw new Error(res.statusText)
                                    }
                                })).json()
                            }))
                        } catch (er) {
                            alert("予測中にエラーが発生しました！\n" + er.message)
                        }
                    }
                }}
            >
                <InputGroup>
                    <FormControl
                        inputRef={n => {
                            this.input = n
                        }}
                    />
                    <InputGroup.Button>
                        <Button type="submit">
                            予測
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </Form>
        )
    }
}

Input.propTypes = {
    dispatch: PropTypes.func.isRequired,
    sentence: PropTypes.string
}

export default Input
