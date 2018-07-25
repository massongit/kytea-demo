import Information from "../components/Information"
import {connect} from "react-redux"
import {injectIntl} from "react-intl"

const mapStateToProps = state => (
    state.showPOSAndPronunciation
)

/**
 * 解析結果表示部のContainer
 */
export default injectIntl(connect(mapStateToProps)(Information))
