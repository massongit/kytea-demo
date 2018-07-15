import {handleActions} from "redux-actions"
import * as types from "../actions/types"

/**
 * KyTeaによる解析結果の表示ActionのReducer
 */
export default handleActions(
    {
        [types.SHOW_SENTENCE]: (state, action) => {
            if (action.payload.words) {
                const words = action.payload.words.map(w => {
                    if (w && w.word) {
                        return w.word
                    } else {
                        return undefined
                    }
                })
                if (!words.includes(undefined) && action.payload.sentence === words.join("")) {
                    return {
                        sentence: action.payload.sentence,
                        words: action.payload.words
                    }
                }
            }
            return state
        }
    },
    {
        sentence: "",
        words: []
    }
)
