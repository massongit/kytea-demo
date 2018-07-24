import React from "react"
import Input from "../containers/Input"
import {Panel, Row} from "react-bootstrap"
import {FormattedMessage} from "react-intl"

/**
 * 入力部のパネル
 * @returns {element} 入力部のパネル
 */
const InputPanel = () => (
    <Row>
        <Panel>
            <Panel.Heading>
                <FormattedMessage id="title.input"/>
            </Panel.Heading>
            <Panel.Body>
                <p>
                    <FormattedMessage id="description.input"/>
                </p>
                <Input/>
            </Panel.Body>
        </Panel>
    </Row>
)

export default InputPanel
