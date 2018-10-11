import React from "react"
import PropTypes from "prop-types"
import PanelCardBody from "../containers/PanelCardBody"
import Information from "../containers/Information"
import Sentence from "../containers/Sentence"
import {Card, CardHeader} from "reactstrap"
import {FormattedMessage} from "react-intl"

/**
 * 解析結果表示部のパネル
 */
class OutputCard extends React.Component {
    static propTypes = {
        word: PropTypes.string
    }

    render() {
        return (
            <Card className="mt-4">
                <CardHeader>
                    <FormattedMessage id="title.result"/>
                </CardHeader>
                <PanelCardBody messageId="description.result">
                    <Sentence/>
                </PanelCardBody>
                {
                    (() => {
                        // 表示する単語が選択されていない場合には表示しない
                        if (this.props.word) {
                            return (<Information/>)
                        }
                    })()
                }
            </Card>
        )
    }
}

export default OutputCard
