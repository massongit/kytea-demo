import showSentenceState2 from "../../test_data/showSentenceState2"
import showSentenceParameter3 from "../../test_data/showSentenceParameter3"
import initialShowSentenceState from "../../test_data/initialShowSentenceState"
import showSentenceReducer from "../../reducers/showSentence"
import {createStore} from "redux"
import {
    dispatchDoubleShowSentenceEqual,
    dispatchShowPOSAndPronunciationEqual,
    dispatchShowSentenceAndShowPOSAndPronunciationEqual,
    dispatchShowSentenceEqual,
    storeEqual
} from "./index"
import {
    sentence,
    sentence2,
    showPOSAndPronunciationState,
    showPOSAndPronunciationState2POSAndWordOnly,
    showPOSAndPronunciationStatePOSAndWordOnly,
    showPOSAndPronunciationStatePOSAndWSOnly,
    showPOSAndPronunciationStatePOSOnly,
    showPOSAndPronunciationStateWordAndWSOnly,
    showPOSAndPronunciationStateWordOnly,
    showPOSAndPronunciationStateWSOnly,
    showSentenceParameterIncludeNoWordWords,
    showSentenceParameterIncludeUndefinedWords,
    showSentenceParameterSentenceOnly,
    showSentenceParameterWordsOnly,
    showSentenceState,
    words2,
    words3
} from "../../test_data"

const showSentenceParameterInvalidSentence = {
    sentence,
    words: words2
}

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
export const showSentenceState3 = {
    sentence: "Ihaveapen.",
    words: words3
}

const dispatchDoubleShowSentenceEqual_ = (store, p, s) => {
    dispatchDoubleShowSentenceEqual(store, {
        sentence: sentence2,
        words: words2.concat(p)
    }, s)
}

let store

describe("reducers/showSentence", () => {
    beforeEach(() => {
        store = createStore(showSentenceReducer)
    })

    it("初期状態を正しく保持している", () => {
        storeEqual(store, initialShowSentenceState)
    })

    it("初期状態において、showSentenceのActionからshowSentenceのStateを生成する", () => {
        dispatchShowSentenceEqual(store, showSentenceState, showSentenceState)
    })

    it("初期状態において、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        dispatchShowSentenceEqual(store, showSentenceParameter3, showSentenceState3)
    })

    it("初期状態において、wordsのみを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterWordsOnly, initialShowSentenceState)
    })

    it("初期状態において、sentenceのみを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterSentenceOnly, initialShowSentenceState)
    })

    it("初期状態において、undefinedな要素を含むwordsを持ったshowSentenceActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterIncludeUndefinedWords, initialShowSentenceState)
    })

    it("初期状態において、undefinedな要素を含むwordを含むwordsを持ったshowSentenceActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterIncludeNoWordWords, initialShowSentenceState)
    })

    it("初期状態以外のStateにおいて、showSentenceのActionからshowSentenceのStateを生成する", () => {
        dispatchDoubleShowSentenceEqual(store, showSentenceState2, showSentenceState2)
    })

    it("初期状態において、sentenceとwords内の単語が一致しないshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterInvalidSentence, initialShowSentenceState)
    })

    it("初期状態以外のStateにおいて、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        dispatchDoubleShowSentenceEqual(store, showSentenceParameter3, showSentenceState3)
    })

    it("初期状態以外のStateにおいて、sentenceのみを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        dispatchDoubleShowSentenceEqual(store, {
            sentence: sentence2
        }, showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordsのみを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        dispatchDoubleShowSentenceEqual(store, {
            words: words2
        }, showSentenceState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        dispatchDoubleShowSentenceEqual_(store, undefined, showSentenceState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        dispatchDoubleShowSentenceEqual_(store, showPOSAndPronunciationState2POSAndWordOnly, showSentenceState)
    })

    it("初期状態以外のStateにおいて、sentenceとwords内の単語が一致しないshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        dispatchDoubleShowSentenceEqual(store, showSentenceParameterInvalidSentence, showSentenceState)
    })

    it("初期状態において、showPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, initialShowSentenceState)
    })

    it("初期状態において、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSOnly, initialShowSentenceState)
    })

    it("初期状態において、wordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWordOnly, initialShowSentenceState)
    })

    it("初期状態において、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWSOnly, initialShowSentenceState)
    })

    it("初期状態において、posとwordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSAndWordOnly, initialShowSentenceState)
    })

    it("初期状態において、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSAndWSOnly, initialShowSentenceState)
    })

    it("初期状態において、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWordAndWSOnly, initialShowSentenceState)
    })

    it("初期状態以外の状態において、showPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, showSentenceState)
    })

    it("初期状態以外のStateにおいて、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSOnly, showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWordOnly, showSentenceState)
    })

    it("初期状態以外のStateにおいて、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWSOnly, showSentenceState)
    })

    it("初期状態以外のStateにおいて、posとwordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSAndWordOnly, showSentenceState)
    })

    it("初期状態以外のStateにおいて、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSAndWSOnly, showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWordAndWSOnly, showSentenceState)
    })
})
