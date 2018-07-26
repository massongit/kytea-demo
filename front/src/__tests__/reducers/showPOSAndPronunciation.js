import deepcopy from "deepcopy"
import showSentenceParameter3 from "../../test_data/showSentenceParameter3"
import initialShowPOSAndPronunciationState from "../../test_data/initialShowPOSAndPronunciationState"
import showPOSAndPronunciationReducer from "../../reducers/showPOSAndPronunciation"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {dispatchShowPOSAndPronunciationEqual, dispatchShowSentenceEqual, storeEqual,} from "./index"
import {
    pos2,
    pronunciation2,
    showPOSAndPronunciationState,
    showPOSAndPronunciationState2,
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
    word2
} from "../../test_data"

const showPOSAndPronunciationState2WordOnly = {
    word: word2
}

const showPOSAndPronunciationState2WordAndWSOnly = {
    word: word2,
    pronunciation: pronunciation2
}

const dispatchDoubleShowPOSAndPronunciationEqual = (store, p, s) => {
    store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
    store.dispatch(showPOSAndPronunciation(p))
    storeEqual(store, s)
}

const dispatchShowPOSAndPronunciationAndShowSentenceEqual = (store, p, s) => {
    store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
    store.dispatch(showSentence(deepcopy(p)))
    storeEqual(store, s)
}

let store

describe("reducers/showPOSAndPronunciation", () => {
    beforeEach(() => {
        store = createStore(showPOSAndPronunciationReducer)
    })

    it("初期状態を正しく保持している", () => {
        storeEqual(store, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、showSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowSentenceEqual(store, showSentenceState, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowSentenceEqual(store, showSentenceParameter3, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、sentenceのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterSentenceOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、wordsのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterWordsOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterIncludeUndefinedWords, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowSentenceEqual(store, showSentenceParameterIncludeNoWordWords, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、showSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationAndShowSentenceEqual(store, showSentenceState, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationAndShowSentenceEqual(store, showSentenceParameter3, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、sentenceのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationAndShowSentenceEqual(store, showSentenceParameterSentenceOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、wordsのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationAndShowSentenceEqual(store, showSentenceParameterWordsOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationAndShowSentenceEqual(store, showSentenceParameterIncludeUndefinedWords, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationAndShowSentenceEqual(store, showSentenceParameterIncludeNoWordWords, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、showPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, showPOSAndPronunciationState)
    })

    it("初期状態において、wordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWordOnly, showPOSAndPronunciationStateWordOnly)
    })

    it("初期状態において、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWordAndWSOnly, showPOSAndPronunciationStateWordAndWSOnly)
    })

    it("初期状態において、posとwordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSAndWordOnly, showPOSAndPronunciationStatePOSAndWordOnly)
    })

    it("初期状態において、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStateWSOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態において、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、初期状態を返す", () => {
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationStatePOSAndWSOnly, initialShowPOSAndPronunciationState)
    })

    it("初期状態以外の状態において、showPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState2, showPOSAndPronunciationState2)
    })

    it("初期状態以外のStateにおいて、wordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState2WordOnly, showPOSAndPronunciationState2WordOnly)
    })

    it("初期状態以外のStateにおいて、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState2WordAndWSOnly, showPOSAndPronunciationState2WordAndWSOnly)
    })

    it("初期状態以外のStateにおいて、posとwordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState2POSAndWordOnly, showPOSAndPronunciationState2POSAndWordOnly)
    })

    it("初期状態以外のStateにおいて、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, {
            pos: pos2
        }, showPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, {
            pronunciation: pronunciation2
        }, showPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        dispatchDoubleShowPOSAndPronunciationEqual(store, {
            pos: pos2,
            pronunciation: pronunciation2
        }, showPOSAndPronunciationState)
    })
})
