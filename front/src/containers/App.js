import App from "../components/App"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    words: state.showSentence.words
})

/**
 * ルート要素のContainer
 */
export default connect(mapStateToProps)(App)
