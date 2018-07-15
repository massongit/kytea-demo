import {combineReducers} from "redux"
import showSentence from "./showSentence"
import showPOSAndPronunciation from "./showPOSAndPronunciation"

/**
 * ルートReducer
 */
export default combineReducers({
    showSentence,
    showPOSAndPronunciation
})
