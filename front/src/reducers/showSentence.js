import * as types from "../actions/types"
import {handleActions} from "redux-actions"

/**
 * KyTeaによる解析結果の表示ActionのReducer
 */
export default handleActions(
    {
        // KyTeaによる解析結果の表示Actionのとき
        [types.SHOW_SENTENCE]: (state, action) => {
            if (action.payload.words) {
                // sentence (検査用)
                let sentence = ""

                for (const w of action.payload.words) {
                    if (w && w.word) { // wordsから単語を取り出し、sentence (検査用) に追加
                        sentence += w.word
                    } else { // words内にデータの欠損が存在する場合、Stateを更新しない
                        return state
                    }
                }

                // wordsから取り出した単語とsentenceが一致するとき、Stateを更新
                if (action.payload.sentence === sentence.replace(/\s/g, "")) {
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
