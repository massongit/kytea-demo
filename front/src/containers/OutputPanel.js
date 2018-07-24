import OutputPanel from "../components/OutputPanel"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    word: state.showPOSAndPronunciation.word
})

/**
 * 解析結果表示部のパネルのContainer
 */
export default connect(mapStateToProps)(OutputPanel)
