import words from "./words"
import showSentenceState2 from "./showSentenceState2"
import showSentenceParameter3 from "./showSentenceParameter3"
import initialShowPOSAndPronunciationState from "./initialShowPOSAndPronunciationState"

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: *[]}}
 */
export const showPOSAndPronunciationState = words[0]

export const pos = showPOSAndPronunciationState.pos

export const word = showPOSAndPronunciationState.word

export const pronunciation = showPOSAndPronunciationState.pronunciation

export const pronunciation__ = {
    "id": 1,
    ...showPOSAndPronunciationState.pronunciation[0]
}

export const sentence2 = showSentenceState2.sentence

export const sentence = "野球のＤＨの正式呼び名と読みを教えてください。"

export const showPOSAndPronunciationStatePOSAndWordOnly = {
    pos,
    word
}

/**
 * 品詞や読みの表示ActionのState
 * @type {{number: number, pos: string, word: string, pronunciation: {id: number}}}
 * @private
 */
export const showPOSAndPronunciationState_ = {
    number: 1,
    pronunciation: pronunciation__,
    ...showPOSAndPronunciationStatePOSAndWordOnly
}

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: *[]}}
 */
export const showPOSAndPronunciationState2 = words[5]

export const pos2 = showPOSAndPronunciationState2.pos

export const word2 = showPOSAndPronunciationState2.word

export const pronunciation2 = showPOSAndPronunciationState2.pronunciation

export const words2 = showSentenceState2.words

export const showPOSAndPronunciationStatePOSOnly = {
    pos
}

export const showPOSAndPronunciationStateWordOnly = {
    word
}

export const showPOSAndPronunciationStateWSOnly = {
    pronunciation
}

export const showPOSAndPronunciationStatePOSAndWSOnly = {
    pos,
    pronunciation
}

export const showPOSAndPronunciationStateWordAndWSOnly = {
    word,
    pronunciation
}

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceState = {
    sentence,
    words
}

export const showSentenceParameterSentenceOnly = {
    sentence
}

export const showSentenceParameterWordsOnly = {
    words
}

export const showSentenceParameterIncludeUndefinedWords = {
    sentence,
    words: words.concat(undefined)
}

export const showSentenceParameterIncludeNoWordWords = {
    sentence,
    words: words.concat(showPOSAndPronunciationStatePOSAndWordOnly)
}

export const showPOSAndPronunciationState2POSAndWordOnly = {
    pos: pos2,
    word: word2
}

export const rootStateAfterShowSentence = {
    showSentence: showSentenceState,
    showPOSAndPronunciation: initialShowPOSAndPronunciationState
}

export const words3 = showSentenceParameter3.words
