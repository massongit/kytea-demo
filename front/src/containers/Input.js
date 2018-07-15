import {connect} from "react-redux"
import Input from "../components/Input"

const mapStateToProps = state => ({
    sentence: state.showSentence.sentence
})

/**
 * 入力部のContainer
 */
export default connect(mapStateToProps)(Input)
