import {connect} from "react-redux"
import Sentence from "../components/Sentence"

const mapStateToProps = state => ({
    words: state.showSentence.words
})

/**
 * 入力文をボタンのグループとして表示するComponentのContainer
 */
export default connect(mapStateToProps)(Sentence)
