import * as types from "./types"
import {createAction} from "redux-actions"
import {intl} from "../intl"

/**
 * タグを変換する
 * @param tag タグ
 * @returns {string} タグ
 */
const convertTag = (tag) => {
    if (tag === "(Unknown)") {
        return intl.formatMessage({
            id: "unknown"
        })
    } else {
        return tag
    }
}

/**
 * 与えられたArrayに対し、map操作を行えそうなら行い、行えないようであれば空のArrayを返す
 * @param l {array}
 * @param f {function} 操作
 * @returns {array}
 */
const mapOrEmptyArray = (l, f) => {
    if (l) {
        return l.map(f)
    } else {
        return []
    }
}

/**
 * KyTeaによる解析結果の表示ActionのActionCreator
 * @type {function}
 */
export const showSentence = createAction(types.SHOW_SENTENCE, parameter => {
    // KyTeaによる解析結果の表示Action
    const action = {
        words: mapOrEmptyArray(parameter.words, w => {
            if (w) {
                return {
                    word: w.word,
                    pronunciation: mapOrEmptyArray(w.pronunciation, p => {
                        p.pronunciation = convertTag(p.pronunciation)
                        return p
                    }),
                    pos: convertTag(w.pos)
                }
            } else {
                return w
            }
        })
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
