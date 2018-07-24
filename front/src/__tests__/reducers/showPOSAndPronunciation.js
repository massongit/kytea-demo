import deepcopy from "deepcopy"
import showPOSAndPronunciationReducer from "../../reducers/showPOSAndPronunciation"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {
    initialShowPOSAndPronunciationState,
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
    showSentenceParameter,
    showSentenceParameter3,
    showSentenceParameterIncludeNoWordWords,
    showSentenceParameterIncludeUndefinedWords,
    showSentenceParameterSentenceOnly,
    showSentenceParameterWordsOnly,
    word2
} from "./index"

const showPOSAndPronunciationState2WordOnly = {
    word: word2
}

const showPOSAndPronunciationState2WordAndWSOnly = {
    word: word2,
    pronunciation: pronunciation2
}

let store

describe("reducers/showPOSAndPronunciation", () => {
    beforeEach(() => {
        store = createStore(showPOSAndPronunciationReducer)
    })

    it("初期状態を正しく保持している", () => {
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、showSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter3)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、sentenceのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterSentenceOnly)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、wordsのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterWordsOnly)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterIncludeUndefinedWords)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterIncludeNoWordWords)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、showSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceParameter3)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、sentenceのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceParameterSentenceOnly)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、wordsのみを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceParameterWordsOnly)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceParameterIncludeUndefinedWords)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showSentence(deepcopy(showSentenceParameterIncludeNoWordWords)))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、showPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual(showPOSAndPronunciationState)
    })

    it("初期状態において、wordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordOnly))
        expect(store.getState()).toEqual(showPOSAndPronunciationStateWordOnly)
    })

    it("初期状態において、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordAndWSOnly))
        expect(store.getState()).toEqual(showPOSAndPronunciationStateWordAndWSOnly)
    })

    it("初期状態において、posとwordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWordOnly))
        expect(store.getState()).toEqual(showPOSAndPronunciationStatePOSAndWordOnly)
    })

    it("初期状態において、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSOnly))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWSOnly))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態において、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、初期状態を返す", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWSOnly))
        expect(store.getState()).toEqual(initialShowPOSAndPronunciationState)
    })

    it("初期状態以外の状態において、showPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        expect(store.getState()).toEqual(showPOSAndPronunciationState2)
    })

    it("初期状態以外のStateにおいて、wordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2WordOnly))
        expect(store.getState()).toEqual(showPOSAndPronunciationState2WordOnly)
    })

    it("初期状態以外のStateにおいて、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2WordAndWSOnly))
        expect(store.getState()).toEqual(showPOSAndPronunciationState2WordAndWSOnly)
    })

    it("初期状態以外のStateにおいて、posとwordのみを持ったshowPOSAndPronunciationのActionからshowPOSAndPronunciationのStateを生成する", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2POSAndWordOnly))
        expect(store.getState()).toEqual(showPOSAndPronunciationState2POSAndWordOnly)
    })

    it("初期状態以外のStateにおいて、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation({
            pos: pos2
        }))
        expect(store.getState()).toEqual(showPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation({
            pronunciation: pronunciation2
        }))
        expect(store.getState()).toEqual(showPOSAndPronunciationState)
    })

    it("初期状態以外のStateにおいて、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation({
            pos: pos2,
            pronunciation: pronunciation2
        }))
        expect(store.getState()).toEqual(showPOSAndPronunciationState)
    })
})
