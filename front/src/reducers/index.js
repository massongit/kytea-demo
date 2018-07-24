import showSentence from "./showSentence"
import showPOSAndPronunciation from "./showPOSAndPronunciation"
import {combineReducers} from "redux"

/**
 * ルートReducer
 */
export default combineReducers({
    showSentence,
    showPOSAndPronunciation
})
