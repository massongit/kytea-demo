import React from "react"
import PropTypes from "prop-types"
import {CardBody} from "reactstrap"
import {intlShape} from "react-intl"

/**
 * CardのBody
 */
class PanelCardBody extends React.Component {
    static propTypes = {
        messageId: PropTypes.string.isRequired,
        children: PropTypes.node,
        intl: intlShape.isRequired
    }

    /**
     * 説明部を描画する
     * @returns {*} 説明部
     */
    renderDescription() {
        if (this.props.messageId) {
            const description = this.props.intl.formatMessage({
                id: this.props.messageId
            })

            if (this.props.children) {
                return (
                    <p>
                        {description}
                    </p>
                )
            } else {
                return description
            }
        }
    }

    render() {
        return (
            <CardBody>
                {this.renderDescription()}
                {this.props.children}
            </CardBody>
        )
    }
}

export default PanelCardBody
