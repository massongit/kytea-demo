import React from "react"
import PropTypes from "prop-types"
import {Table} from "react-bootstrap"
import {FormattedMessage, FormattedNumber} from "react-intl"

/**
 * 解析結果表示部
 */
class Information extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        word: PropTypes.string,
        pos: PropTypes.string.isRequired,
        pronunciation: PropTypes.shape({
            id: PropTypes.number,
            margin: PropTypes.number.isRequired,
            pronunciation: PropTypes.string.isRequired
        })
    }

    render() {
        return (
            <Table striped bordered hover condensed>
                <thead>
                    <tr>
                        {
                            [
                                (
                                    <FormattedMessage
                                        key="header.candidate"
                                        id="header.candidate"
                                    />
                                ),
                                (
                                    <FormattedMessage
                                        key="header.word"
                                        id="header.word"
                                    />
                                ),
                                (
                                    <FormattedMessage
                                        key="header.pos"
                                        id="header.pos"
                                    />
                                ),
                                (
                                    <FormattedMessage
                                        key="header.pronunciation"
                                        id="header.pronunciation"
                                    />
                                ),
                                (
                                    <FormattedMessage
                                        key="header.margin"
                                        id="header.margin"
                                    />
                                )
                            ].map((name, i) => ( // 見出しを上下左右中央揃えで表示
                                <th
                                    key={i}
                                    className="text-center"
                                    style={{
                                        "verticalAlign": "middle"
                                    }}
                                >
                                    {name}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            <FormattedNumber
                                value={this.props.number}
                            />
                        </td>
                        <td className="text-center">
                            {this.props.word}
                        </td>
                        <td className="text-center">
                            {this.props.pos}
                        </td>
                        <td className="text-center">
                            {this.props.pronunciation.pronunciation}
                        </td>
                        <td className="text-right">
                            <FormattedNumber
                                value={this.props.pronunciation.margin}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Information
