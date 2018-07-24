import React from "react"
import {Jumbotron, Row} from "react-bootstrap"
import {FormattedMessage} from "react-intl"

/**
 * ヘッダー
 * @returns {element} ヘッダー
 */
const Header = () => (
    <Row>
        <Jumbotron>
            <h1>KyTea</h1>
            <p>
                <FormattedMessage id="abstract.kyTea"/>
            </p>
        </Jumbotron>
    </Row>
)

export default Header
