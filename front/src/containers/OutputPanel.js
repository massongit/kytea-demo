import {connect} from "react-redux"
import OutputPanel from "../components/OutputPanel"

const mapStateToProps = state => ({
    word: state.showPOSAndPronunciation.word
})

/**
 * 解析結果表示部のパネルのContainer
 */
export default connect(mapStateToProps)(OutputPanel)
