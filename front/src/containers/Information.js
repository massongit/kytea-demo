import Information from "../components/Information"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    number: state.showPOSAndPronunciation.number,
    word: state.showPOSAndPronunciation.word,
    pos: state.showPOSAndPronunciation.pos,
    pronunciation: state.showPOSAndPronunciation.pronunciation
})

/**
 * 解析結果表示部のContainer
 */
export default connect(mapStateToProps)(Information)
