import React from "react"
import PropTypes from "prop-types"
import PanelBody from "./PanelBody"
import Information from "../containers/Information"
import Sentence from "../containers/Sentence"
import {Panel, Row} from "react-bootstrap"
import {FormattedMessage} from "react-intl"

/**
 * 解析結果表示部のパネル
 */
class OutputPanel extends React.Component {
    static propTypes = {
        word: PropTypes.string
    }

    render() {
        return (
            <Row>
                <Panel>
                    <Panel.Heading>
                        <FormattedMessage id="title.result"/>
                    </Panel.Heading>
                    <PanelBody messageId="description.result">
                        <Sentence/>
                    </PanelBody>
                    {
                        (() => {
                            // 表示する単語が選択されていない場合には表示しない
                            if (this.props.word) {
                                return (<Information/>)
                            }
                        })()
                    }
                </Panel>
            </Row>
        )
    }
}

export default OutputPanel
