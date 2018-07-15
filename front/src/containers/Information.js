import {connect} from "react-redux"
import Information from "../components/Information"

const mapStateToProps = state => ({
    word: state.showPOSAndPronunciation.word,
    pos: state.showPOSAndPronunciation.pos,
    pronunciation: state.showPOSAndPronunciation.pronunciation
})

/**
 * 解析結果表示部のContainer
 */
export default connect(mapStateToProps)(Information)
