import {createAction} from "redux-actions"
import * as types from "./types"

/**
 * KyTeaによる解析結果の表示ActionのActionCreator
 * @type {function}
 */
export const showSentence = createAction(types.SHOW_SENTENCE, parameter => ({
    sentence: parameter.sentence,
    words: parameter.words
}))

/**
 * 品詞や読みの表示ActionのActionCreator
 * @type {function}
 */
export const showPOSAndPronunciation = createAction(types.SHOW_PRONUNCIATION, parameter => ({
    word: parameter.word,
    pos: parameter.pos,
    pronunciation: parameter.pronunciation
}))
