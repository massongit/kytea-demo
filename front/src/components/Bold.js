import React from "react"
import PropTypes from "prop-types"

/**
 * 文章を強調するためのComponent
 */
class Bold extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        return (
            <strong>
                <u>
                    {this.props.children}
                </u>
            </strong>
        )
    }
}

export default Bold
