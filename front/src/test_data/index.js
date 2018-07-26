import words2 from "./words2"
import words3 from "./words3"
import pronunciation_ from "./pronunciation_"
import pronunciation2 from "./pronunciation2"
import initialShowPOSAndPronunciationState from "./initialShowPOSAndPronunciationState"

export const pos = "名詞"

export const word = "野球"

export const pronunciation = [
    pronunciation_
]

export const pronunciation__ = {
    "id": 1,
    ...pronunciation_
}

export const sentence2 = "本日は晴天なり。"

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceState2 = {
    sentence: sentence2,
    words: words2
}

export const sentence = "野球のＤＨの正式呼び名と読みを教えてください。"

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: *[]}}
 */
export const showPOSAndPronunciationState = {
    pos,
    word,
    pronunciation
}

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: {id: number, pronunciation: *[]}}}
 */
export const showPOSAndPronunciationState_ = {
    number: 1,
    pos,
    word,
    pronunciation: pronunciation__
}

export const pos2 = "名詞"

export const word2 = "呼び名"

/**
 * 品詞や読みの表示ActionのState
 * @type {{pos: string, word: string, pronunciation: *[]}}
 */
export const showPOSAndPronunciationState2 = {
    pos: pos2,
    word: word2,
    pronunciation: pronunciation2
}

export const words = [
    showPOSAndPronunciationState,
    {
        "pos": "助詞",
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
        "word": "の"
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

export const showPOSAndPronunciationStatePOSOnly = {
    pos
}

export const showPOSAndPronunciationStateWordOnly = {
    word
}

export const showPOSAndPronunciationStateWSOnly = {
    pronunciation
}

export const showPOSAndPronunciationStatePOSAndWordOnly = {
    pos,
    word
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
export const showSentenceParameter = {
    sentence,
    words
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

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceParameter3 = {
    sentence: "I have a pen.",
    words: words3
}
