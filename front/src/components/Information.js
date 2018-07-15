import React from "react"
import PropTypes from "prop-types"
import {Table} from "react-bootstrap"

/**
 * 解析結果表示部
 * @param word {string} 単語
 * @param pos {string} 品詞
 * @param pronunciation {string} 読み
 * @returns {element} 解析結果表示部
 */
const Information = ({word, pos, pronunciation}) => (
    <Table striped bordered hover condensed>
        <thead>
            <tr>
                <th className="text-center">
                単語
                </th>
                <th className="text-center">
                品詞
                </th>
                <th className="text-center">
                読み
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-center">
                    {word}
                </td>
                <td className="text-center">
                    {pos}
                </td>
                <td className="text-center">
                    {pronunciation}
                </td>
            </tr>
        </tbody>
    </Table>
)

Information.propTypes = {
    word: PropTypes.string,
    pos: PropTypes.string,
    pronunciation: PropTypes.string
}

export default Information
