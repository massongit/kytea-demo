import {handleActions} from "redux-actions"
import * as types from "../actions/types"

/**
 * 初期状態
 * @type {{word: string, pos: string[], pronunciation: string[]}}
 */
const initialState = {
    word: "",
    pos: "",
    pronunciation: ""
}

/**
 * 品詞や読みの表示ActionのReducer
 */
export default handleActions({
    [types.SHOW_SENTENCE]: () => initialState,
    [types.SHOW_PRONUNCIATION]: (state, action) => {
        if (action.payload.word) {
            return {
                word: action.payload.word,
                pos: action.payload.pos,
                pronunciation: action.payload.pronunciation
            }
        } else {
            return state
        }
    }
}, initialState)
