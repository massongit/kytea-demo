import React from "react"
import {Panel, Row} from "react-bootstrap"
import {FormattedMessage} from "react-intl"

/**
 * 概要パネル
 * @returns {element} 概要パネル
 */
const DescriptionPanel = () => (
    <Row>
        <Panel>
            <Panel.Heading>
                <FormattedMessage id="title.description"/>
            </Panel.Heading>
            <Panel.Body>
                <FormattedMessage id="description.kyTea"/>
            </Panel.Body>
        </Panel>
    </Row>
)

export default DescriptionPanel
