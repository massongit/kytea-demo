import showSentenceReducer from "../../reducers/showSentence"
import * as types from "../../actions/types"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {
    initialShowSentenceState,
    sentence2,
    showPOSAndPronunciationState,
    showPOSAndPronunciationState2POSAndWordOnly,
    showPOSAndPronunciationStatePOSAndWordOnly,
    showPOSAndPronunciationStatePOSAndWSOnly,
    showPOSAndPronunciationStatePOSOnly,
    showPOSAndPronunciationStateWordAndWSOnly,
    showPOSAndPronunciationStateWordOnly,
    showPOSAndPronunciationStateWSOnly,
    showSentenceState,
    showSentenceState2,
    showSentenceStateIncludeNoWordWords,
    showSentenceStateIncludeUndefinedWords,
    showSentenceStateSentenceOnly,
    showSentenceStateWordsOnly,
    words2
} from "./index"

const showSentenceState2SentenceOnly = {
    sentence: sentence2
}

const showSentenceState2WordsOnly = {
    words: words2
}

const showSentenceState2IncludeUndefinedWords = {
    type: types.SHOW_SENTENCE,
    payload: {
        sentence: sentence2,
        words: words2.concat(undefined)
    }
}

const showSentenceState2IncludeNoWordWords = {
    type: types.SHOW_SENTENCE,
    payload: {
        sentence: sentence2,
        words: words2.concat(showPOSAndPronunciationState2POSAndWordOnly)
    }
}

let store

describe("reducers/showSentence", () => {
    beforeEach(() => {
        store = createStore(showSentenceReducer)
    })

    it("初期状態を正しく保持している", () => {
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、showSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(showSentenceState))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態において、wordsのみを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceStateWordsOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、sentenceのみを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceStateSentenceOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、undefinedな要素を含むwordsを持ったshowSentenceActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceStateIncludeUndefinedWords))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、undefinedな要素を含むwordを含むwordsを持ったshowSentenceActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceStateIncludeNoWordWords))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態以外のStateにおいて、showSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2))
        expect(store.getState()).toEqual(showSentenceState2)
    })

    it("初期状態以外のStateにおいて、sentenceのみを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2SentenceOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordsのみを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2WordsOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2IncludeUndefinedWords))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showSentence(showSentenceState2IncludeNoWordWords))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態において、showPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、wordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWSOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、posとwordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWordOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWSOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordAndWSOnly))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態以外の状態において、showPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、posとwordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWordOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordAndWSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })
})
