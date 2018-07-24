import Input from "../components/Input"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    sentence: state.showSentence.sentence
})

/**
 * 入力部のContainer
 */
export default connect(mapStateToProps)(Input)
