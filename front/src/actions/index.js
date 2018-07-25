import * as types from "./types"
import {createAction} from "redux-actions"
import {intl} from "../intl"

const convertTag = (pos) => {
    if (pos === "(Unknown)") {
        return intl.formatMessage({
            id: "unknown"
        })
    } else {
        return pos
    }
}

/**
 * KyTeaによる解析結果の表示ActionのActionCreator
 * @type {function}
 */
export const showSentence = createAction(types.SHOW_SENTENCE, parameter => {
    // KyTeaによる解析結果の表示Action
    const action = {
        words: parameter.words ? parameter.words.map(w => {
            if (w) {
                return {
                    word: w.word,
                    pronunciation: w.pronunciation ? w.pronunciation.map(p => {
                        p.pronunciation = convertTag(p.pronunciation)
                        return p
                    }) : [],
                    pos: convertTag(w.pos)
                }
            } else {
                return w
            }
        }) : []
    }

    // 空白を除去したsentenceをActionにセット
    if (parameter.sentence) {
        action.sentence = parameter.sentence.replace(/\s/g, "")
    }

    return action
})

/**
 * 品詞や読みの表示ActionのActionCreator
 * @type {function}
 */
export const showPOSAndPronunciation = createAction(types.SHOW_PRONUNCIATION, parameter => ({
    number: parameter.number,
    word: parameter.word,
    pos: parameter.pos,
    pronunciation: parameter.pronunciation
}))
