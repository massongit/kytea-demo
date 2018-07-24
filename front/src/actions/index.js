import * as types from "./types"
import {createAction} from "redux-actions"
import {intl} from "../intl"

/**
 * KyTeaによる解析結果の表示ActionのActionCreator
 * @type {function}
 */
export const showSentence = createAction(types.SHOW_SENTENCE, parameter => {
    // KyTeaによる解析結果の表示Action
    const action = {
        words: []
    }

    // 空白を除去したsentenceをActionにセット
    if (parameter.sentence) {
        action.sentence = parameter.sentence.replace(/\s/g, "")
    }

    if (parameter.words) {
        // 予測不能であった場合のタグ
        const unknownTag = "(Unknown)"

        for (const word of parameter.words) {
            if (word) {
                // Actionのword
                const word_ = {
                    word: word.word,
                    pronunciation: []
                }

                if (word.pos === unknownTag) {
                    word.pos = intl.formatMessage({
                        id: "unknown"
                    })
                } else {
                    word_.pos = word.pos
                }

                for (let i = 0; word.pronunciation && i < word.pronunciation.length; i++) {
                    if (word.pronunciation[i].pronunciation === unknownTag) {
                        word.pronunciation[i].pronunciation = intl.formatMessage({
                            id: "unknown"
                        })
                    }

                    word_.pronunciation.push(word.pronunciation[i])
                }

                action.words.push(word_)
            } else {
                action.words.push(word)
            }
        }
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
