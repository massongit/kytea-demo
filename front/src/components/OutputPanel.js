import React from "react"
import PropTypes from "prop-types"
import {Panel, Row} from "react-bootstrap"
import Information from "../containers/Information"
import Sentence from "../containers/Sentence"

/**
 * 解析結果表示部のパネル
 * @param word {string} 単語
 * @returns {element} 解析結果表示部のパネル
 */
const OutputPanel = ({word}) => (
    <Row>
        <Panel>
            <Panel.Heading>
                結果
            </Panel.Heading>
            <Panel.Body>
                <p>
                    単語をクリックすると、その単語の品詞や読みが表示されます。
                </p>
                <Sentence/>
            </Panel.Body>
            {
                (() => {
                    // 表示する単語が選択されていない場合には表示しない
                    if (word) {
                        return (<Information/>)
                    }
                })()
            }
        </Panel>
    </Row>
)

OutputPanel.propTypes = {
    word: PropTypes.string
}

export default OutputPanel
