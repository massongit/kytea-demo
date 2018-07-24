import Information from "../components/Information"
import {connect} from "react-redux"
import {injectIntl} from "react-intl"

const mapStateToProps = state => ({
    number: state.showPOSAndPronunciation.number,
    word: state.showPOSAndPronunciation.word,
    pos: state.showPOSAndPronunciation.pos,
    pronunciation: state.showPOSAndPronunciation.pronunciation
})

/**
 * 解析結果表示部のContainer
 */
export default injectIntl(connect(mapStateToProps)(Information))
