import {connect} from "react-redux"
import App from "../components/App"

const mapStateToProps = state => ({
    words: state.showSentence.words
})

/**
 * ルート要素のContainer
 */
export default connect(mapStateToProps)(App)
