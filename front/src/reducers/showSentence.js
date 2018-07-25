import * as types from "../actions/types"
import {handleActions} from "redux-actions"

/**
 * wordsから単語を取り出し、リストを作成する
 * @param words words
 * @returns {[string]}
 */
const makeWordList = (words) => (
    words.map(w => {
        if (w && w.word) { // 正常なデータが存在するとき
            return w.word
        } else { // データの欠損が存在するとき
            return undefined
        }
    })
)

/**
 * KyTeaによる解析結果の表示ActionのReducer
 */
export default handleActions(
    {
        // KyTeaによる解析結果の表示Actionのとき
        [types.SHOW_SENTENCE]: (state, action) => {
            if (action.payload.words) {
                // wordsから取り出した単語のリスト
                const wordList = makeWordList(action.payload.words)

                // wordsに欠損がなく、wordsから取り出した単語とsentenceが一致するとき、Stateを更新
                if (!wordList.includes(undefined) && action.payload.sentence === wordList.join("").replace(/\s/g, "")) {
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
