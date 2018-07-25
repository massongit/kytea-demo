import React from "react"
import PropTypes from "prop-types"
import {Panel} from "react-bootstrap"
import {FormattedMessage} from "react-intl"

/**
 * PanelのBody
 */
class PanelBody extends React.Component {
    static propTypes = {
        messageId: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    render() {
        return (
            <Panel.Body>
                <p>
                    <FormattedMessage
                        id={this.props.messageId}
                    />
                </p>
                {this.props.children}
            </Panel.Body>
        )
    }
}

export default PanelBody
