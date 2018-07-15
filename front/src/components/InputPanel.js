import React from "react"
import {Panel, Row} from "react-bootstrap"
import Input from "../containers/Input"

/**
 * 入力部のパネル
 * @returns {element} 入力部のパネル
 */
const InputPanel = () => (
    <Row>
        <Panel>
            <Panel.Heading>
                入力
            </Panel.Heading>
            <Panel.Body>
                <p>
                    日本語の文章を入力し、予測ボタンをクリックしてください。
                </p>
                <Input/>
            </Panel.Body>
        </Panel>
    </Row>
)

export default InputPanel
