import React from "react"
import {Jumbotron} from "reactstrap"
import {FormattedMessage} from "react-intl"

/**
 * ヘッダー
 * @returns {element} ヘッダー
 */
const Header = () => (
    <Jumbotron>
        <h1 className="display-4">KyTea</h1>
        <p className="lead">
            <FormattedMessage id="abstract.kyTea"/>
        </p>
    </Jumbotron>
)

export default Header
