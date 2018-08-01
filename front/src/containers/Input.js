import Input from "../components/Input"
import {connect} from "react-redux"
import {injectIntl} from "react-intl"

const mapStateToProps = state => ({
    sentence: state.showSentence.sentence,
    loading: state.loading.loading
})

/**
 * 入力部のContainer
 */
export default injectIntl(connect(mapStateToProps)(Input))
