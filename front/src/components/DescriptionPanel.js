import React from "react"
import {Panel, Row} from "react-bootstrap"

/**
 * 概要パネル
 * @returns {element} 概要パネル
 */
const DescriptionPanel = () => (
    <Row>
        <Panel>
            <Panel.Heading>
                概要
            </Panel.Heading>
            <Panel.Body>
                日本語の文章中に存在する各単語の品詞や読みを予測するシステムです。
            </Panel.Body>
        </Panel>
    </Row>
)

export default DescriptionPanel
