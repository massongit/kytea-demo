import Word from "../components/Word"
import {connect} from "react-redux"
import {injectIntl} from "react-intl"

/**
 * Sentenceの各ボタンのContainer
 */
export default injectIntl(connect()(Word))
