import * as types from "../actions/types"
import {handleActions} from "redux-actions"

/**
 * 初期状態
 * @type {{word: string, pos: string, pronunciation: {pronunciation: string}}}
 */
const initialState = {
    word: "",
    pos: "",
    pronunciation: {
        pronunciation: ""
    }
}

/**
 * 品詞や読みの表示ActionのReducer
 */
export default handleActions({
    // KyTeaによる解析結果の表示Actionのとき、Stateをリセット
    [types.SHOW_SENTENCE]: () => initialState,
    // 品詞や読みの表示Actionのとき
    [types.SHOW_PRONUNCIATION]: (state, action) => {
        if (action.payload.word) { // Actionにwordが存在するとき、Stateを更新
            return {
                number: action.payload.number,
                word: action.payload.word,
                pos: action.payload.pos,
                pronunciation: action.payload.pronunciation
            }
        } else { // Actionにwordが存在しないとき、Stateを更新しない
            return state
        }
    }
}, initialState)
