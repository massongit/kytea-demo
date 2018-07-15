import rootReducer from "../../reducers"
import * as types from "../../actions/types"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"

export const pos = "名詞"

export const word = "野球"

export const pronunciation = "やきゅう"

export const words2 = [
    {
        "pos": "名詞",
        "word": "本日",
        "pronunciation": "ほんじつ"
    },
    {
        "pos": "助詞",
        "word": "は",
        "pronunciation": "は"
    },
    {
        "pos": "名詞",
        "word": "晴天",
        "pronunciation": "せいてん"
    },
    {
        "pos": "助動詞",
        "word": "な",
        "pronunciation": "な"
    },
    {
        "pos": "語尾",
        "word": "り",
        "pronunciation": "り"
    },
    {
        "pos": "補助記号",
        "word": "。",
        "pronunciation": "。"
    }
]

export const sentence2 = "本日は晴天なり。"

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceState2 = {
    sentence: sentence2,
    words: words2
}

/**
 * 初期状態
 * @type {{pos: string, word: string, pronunciation: string}}
 */
export const initialShowPronunciationState = {
    pos: "",
    word: "",
    pronunciation: ""
}

const showSentenceState2AndInitialShowPronunciationState = {
    showSentence: showSentenceState2,
    showPOSAndPronunciation: initialShowPronunciationState
}

export const sentence = "野球のＤＨの正式呼び名と読みを教えてください。"

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: string}}
 */
export const showPOSAndPronunciationState = {
    pos: pos,
    word: word,
    pronunciation: pronunciation
}

export const pos2 = "名詞"

export const word2 = "呼び名"

export const pronunciation2 = "よびな"

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: string}}
 */
export const showPOSAndPronunciationState2 = {
    pos: pos2,
    word: word2,
    pronunciation: pronunciation2
}

export const pos3 = "助詞"

export const word3 = "の"

export const pronunciation3 = "の"

export const showPOSAndPronunciationState3 = {
    pos: pos3,
    word: word3,
    pronunciation: pronunciation3
}

export const words = [
    showPOSAndPronunciationState,
    showPOSAndPronunciationState3,
    {
        pos: "名詞",
        word: "ＤＨ",
        pronunciation: "ＤＨ"
    },
    {
        pos: "助詞",
        word: "の",
        pronunciation: "の"
    },
    {
        pos: "形状詞",
        word: "正式",
        pronunciation: "せいしき"
    },
    showPOSAndPronunciationState2,
    {
        pos: "助詞",
        word: "と",
        pronunciation: "と"
    },
    {
        pos: "名詞",
        word: "読み",
        pronunciation: "よみ"
    },
    {
        pos: "助詞",
        word: "を",
        pronunciation: "を"
    },
    {
        pos: "動詞",
        word: "教え",
        pronunciation: "おしえ"
    },
    {
        pos: "助詞",
        word: "て",
        pronunciation: "て"
    },
    {
        pos: "動詞",
        word: "くださ",
        pronunciation: "くださ"
    },
    {
        pos: "語尾",
        word: "い",
        pronunciation: "い"
    },
    {
        pos: "補助記号",
        word: "。",
        pronunciation: "。"
    }
]

/**
 * 初期状態
 * @type {{sentence: string, words: *[]}}
 */
export const initialShowSentenceState = {
    sentence: "",
    words: []
}

export const showPOSAndPronunciationStatePOSOnly = {
    pos: pos
}

export const showPOSAndPronunciationStateWordOnly = {
    word: word
}

export const showPOSAndPronunciationStateWSOnly = {
    pronunciation: pronunciation
}

export const showPOSAndPronunciationStatePOSAndWordOnly = {
    pos: pos,
    word: word
}

export const showPOSAndPronunciationStatePOSAndWSOnly = {
    pos: pos,
    pronunciation: pronunciation
}

export const showPOSAndPronunciationStateWordAndWSOnly = {
    word: word,
    pronunciation: pronunciation
}

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceState = {
    sentence: sentence,
    words: words
}

export const showSentenceStateSentenceOnly = {
    sentence: sentence
}

export const showSentenceStateWordsOnly = {
    words: words
}

export const showSentenceStateIncludeUndefinedWords = {
    sentence: sentence,
    words: words.concat(undefined)
}

export const showSentenceStateIncludeNoWordWords = {
    type: types.SHOW_SENTENCE,
    payload: {
        sentence: sentence,
        words: words.concat(showPOSAndPronunciationStatePOSAndWordOnly)
    }
}

export const showPOSAndPronunciationState2POSAndWordOnly = {
    pos: pos2,
    word: word2
}

export const rootStateAfterShowSentence = {
    showSentence: showSentenceState,
    showPOSAndPronunciation: initialShowPronunciationState
}

let store

describe("reducers/index", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("初期状態を正しく保持している", () => {
        expect(store.getState()).toEqual({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPronunciationState
        })
    })

    it("初期状態からshowSentenceへStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        expect(store.getState()).toEqual(rootStateAfterShowSentence)
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(showSentenceState2))
        expect(store.getState()).toEqual(showSentenceState2AndInitialShowPronunciationState)
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState2
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        store.dispatch(showSentence(showSentenceState2))
        expect(store.getState()).toEqual(showSentenceState2AndInitialShowPronunciationState)
    })

    it("初期状態からshowSentence, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2))
        expect(store.getState()).toEqual(showSentenceState2AndInitialShowPronunciationState)
    })


    it("初期状態からshowSentence, showSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState2,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState2,
            showPOSAndPronunciation: showPOSAndPronunciationState2
        })
    })
})
