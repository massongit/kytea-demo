import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"

export const pos = "名詞"

export const word = "野球"

export const pronunciation = [
    {
        "margin": 100.0,
        "pronunciation": "やきゅう"
    }
]

export const pronunciation_ = {
    "id": 1,
    ...pronunciation[0]
}


export const words2 = [
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "ほんじつ"
            }
        ],
        "word": "本日"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "は"
            }
        ],
        "word": "は"
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "せいてん"
            }
        ],
        "word": "晴天"
    },
    {
        "pos": "助動詞",
        "pronunciation": [
            {
                "margin": 0.9999511421247065,
                "pronunciation": "な"
            },
            {
                "margin": 0.0,
                "pronunciation": "らな"
            }
        ],
        "word": "な"
    },
    {
        "pos": "語尾",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "り"
            }
        ],
        "word": "り"
    },
    {
        "pos": "補助記号",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "。"
            }
        ],
        "word": "。"
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
 * @type {{pos: string, word: string, pronunciation: {pronunciation: Array}}}
 */
export const initialShowPOSAndPronunciationState = {
    pos: "",
    word: "",
    pronunciation: {
        pronunciation: ""
    }
}

const showSentenceState2AndInitialShowPOSAndPronunciationState = {
    showSentence: showSentenceState2,
    showPOSAndPronunciation: initialShowPOSAndPronunciationState
}

export const sentence = "野球のＤＨの正式呼び名と読みを教えてください。"

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: *[]}}
 */
export const showPOSAndPronunciationState = {
    pos: pos,
    word: word,
    pronunciation: pronunciation
}

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: {id: number, pronunciation: *[]}}}
 */
export const showPOSAndPronunciationState_ = {
    number: 1,
    pos: pos,
    word: word,
    pronunciation: pronunciation_
}

export const pos2 = "名詞"

export const word2 = "呼び名"

export const pronunciation2 = [
    {
        "margin": 100.0,
        "pronunciation": "よびな"
    }
]

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: *[]}}
 */
export const showPOSAndPronunciationState2 = {
    pos: pos2,
    word: word2,
    pronunciation: pronunciation2
}

const pos3 = "助詞"

const word3 = "の"

export const words = [
    showPOSAndPronunciationState,
    {
        "pos": pos3,
        "pronunciation": [
            {
                "margin": 2.12891303174829,
                "pronunciation": "の"
            },
            {
                "margin": 0.0,
                "pronunciation": "きの"
            },
            {
                "margin": 0.0,
                "pronunciation": "ゅの"
            }
        ],
        "word": word3
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "ＤＨ"
            }
        ],
        "word": "ＤＨ"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 2.1760714835829633,
                "pronunciation": "の"
            },
            {
                "margin": 0.0,
                "pronunciation": "きの"
            },
            {
                "margin": 0.0,
                "pronunciation": "ゅの"
            }
        ],
        "word": "の"
    },
    {
        "pos": "形状詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "せいしき"
            }
        ],
        "word": "正式"
    },
    showPOSAndPronunciationState2,
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "と"
            }
        ],
        "word": "と"
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "よみ"
            }
        ],
        "word": "読み"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 1.9998295447276375,
                "pronunciation": "を"
            },
            {
                "margin": 0.0,
                "pronunciation": "みを"
            },
            {
                "margin": -5.912806885244315e-05,
                "pronunciation": "くを"
            }
        ],
        "word": "を"
    },
    {
        "pos": "動詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "おしえ"
            }
        ],
        "word": "教え"
    },
    {
        "pos": "助詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "て"
            }
        ],
        "word": "て"
    },
    {
        "pos": "動詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "くださ"
            }
        ],
        "word": "くださ"
    },
    {
        "pos": "語尾",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "い"
            }
        ],
        "word": "い"
    },
    {
        "pos": "補助記号",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "。"
            }
        ],
        "word": "。"
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
export const showSentenceParameter = {
    sentence: sentence,
    words: words
}

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceState = {
    sentence: sentence,
    words: words
}

export const showSentenceParameterSentenceOnly = {
    sentence: sentence
}

export const showSentenceParameterWordsOnly = {
    words: words
}

export const showSentenceParameterIncludeUndefinedWords = {
    sentence: sentence,
    words: words.concat(undefined)
}

export const showSentenceParameterIncludeNoWordWords = {
    sentence: sentence,
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

const sentence3 = "I have a pen."

export const words3 = [
    {
        "pos": "補助記号",
        "pronunciation": [
            {
                "margin": 0.0,
                "pronunciation": "(Unknown)"
            }
        ],
        "word": "I"
    },
    {
        "pos": "名詞",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "はぶ"
            }
        ],
        "word": "have"
    },
    {
        "pos": "記号",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "Ａ"
            }
        ],
        "word": "a"
    },
    {
        "pos": "補助記号",
        "pronunciation": [
            {
                "margin": 0.0,
                "pronunciation": "(Unknown)"
            }
        ],
        "word": "pen"
    },
    {
        "pos": "補助記号",
        "pronunciation": [
            {
                "margin": 100.0,
                "pronunciation": "。"
            }
        ],
        "word": "."
    }
]

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceParameter3 = {
    sentence: sentence3,
    words: words3
}

let store

describe("reducers/index", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("初期状態を正しく保持している", () => {
        expect(store.getState()).toEqual({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentenceへStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        expect(store.getState()).toEqual(rootStateAfterShowSentence)
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        expect(store.getState()).toEqual(showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState2
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        expect(store.getState()).toEqual(showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からshowSentence, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        expect(store.getState()).toEqual(showSentenceState2AndInitialShowPOSAndPronunciationState)
    })


    it("初期状態からshowSentence, showSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState2,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        expect(store.getState()).toEqual({
            showSentence: showSentenceState2,
            showPOSAndPronunciation: showPOSAndPronunciationState2
        })
    })
})
