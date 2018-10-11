import React from "react"
import PropTypes from "prop-types"
import {Table} from "reactstrap"
import {FormattedNumber, intlShape} from "react-intl"
import {propTypesPronunciation} from "./App"

/**
 * 解析結果表示部
 */
class Information extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        word: PropTypes.string,
        pos: PropTypes.string.isRequired,
        pronunciation: propTypesPronunciation,
        intl: intlShape.isRequired
    }

    /**
     * ヘッダー部を描画する
     * @returns {node} ヘッダー部
     */
    renderHeader() {
        return (
            <tr>
                {
                    [
                        "header.candidate",
                        "header.word",
                        "header.pos",
                        "header.pronunciation",
                        "header.margin"
                    ].map((id, i) => ( // 見出しを上下左右中央揃えで表示
                        <th
                            key={i}
                            className="text-center"
                            style={{
                                "verticalAlign": "middle"
                            }}
                        >
                            {this.props.intl.formatMessage({
                                id
                            })}
                        </th>
                    ))
                }
            </tr>
        )
    }

    /**
     * コンテンツ部を描画する
     * @returns {node} コンテンツ部
     */
    renderContents() {
        return (
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
        )
    }

    render() {
        return (
            <Table striped bordered hover size="sm" className="mb-0">
                <thead>
                    {this.renderHeader()}
                </thead>
                <tbody>
                    {this.renderContents()}
                </tbody>
            </Table>
        )
    }
}

export default Information
