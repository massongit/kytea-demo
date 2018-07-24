import React from "react"
import PropTypes from "prop-types"
import {Table} from "react-bootstrap"
import {FormattedNumber, intlShape} from "react-intl"

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
        }),
        intl: intlShape.isRequired
    }

    render() {
        return (
            <Table striped bordered hover condensed>
                <thead>
                    <tr>
                        {
                            [
                                this.props.intl.formatMessage({
                                    id: "header.candidate"
                                }),
                                this.props.intl.formatMessage({
                                    id: "header.word"
                                }),
                                this.props.intl.formatMessage({
                                    id: "header.pos"
                                }),
                                this.props.intl.formatMessage({
                                    id: "header.pronunciation"
                                }),
                                this.props.intl.formatMessage({
                                    id: "header.margin"
                                })
                            ].map((header, i) => ( // 見出しを上下左右中央揃えで表示
                                <th
                                    key={i}
                                    className="text-center"
                                    style={{
                                        "verticalAlign": "middle"
                                    }}
                                >
                                    {header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            [
                                this.props.intl.formatNumber(this.props.number),
                                this.props.word,
                                this.props.pos,
                                this.props.pronunciation.pronunciation
                            ].map((data, i) => (
                                <td
                                    className="text-center"
                                    key={i}
                                >
                                    {data}
                                </td>
                            ))
                        }
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
