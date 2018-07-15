import React from "react"
import {Jumbotron, Row} from "react-bootstrap"

/**
 * ヘッダー
 * @returns {element} ヘッダー
 */
const Header = () => (
    <Row>
        <Jumbotron>
            <h1>KyTea</h1>
            <p>京都テキスト解析ツールキット</p>
        </Jumbotron>
    </Row>
)

export default Header
