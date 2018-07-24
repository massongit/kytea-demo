import deepcopy from "deepcopy"
import showSentenceReducer from "../../reducers/showSentence"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {
    initialShowSentenceState,
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
    showSentenceParameter,
    showSentenceState2,
    showSentenceParameter3,
    showSentenceParameterIncludeNoWordWords,
    showSentenceParameterIncludeUndefinedWords,
    showSentenceParameterSentenceOnly,
    showSentenceParameterWordsOnly,
    showSentenceState,
    words2,
    words3
} from "./index"

const showSentenceParameterInvalidSentence = {
    sentence: sentence,
    words: words2
}

/**
 * KyTeaによる解析結果の表示ActionのState
 * @type {{sentence: string, words: *[]}}
 */
const showSentenceState3 = {
    sentence: "Ihaveapen.",
    words: words3
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
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態において、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter3)))
        expect(store.getState()).toEqual(showSentenceState3)
    })

    it("初期状態において、wordsのみを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterWordsOnly)))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、sentenceのみを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterSentenceOnly)))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、undefinedな要素を含むwordsを持ったshowSentenceActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterIncludeUndefinedWords)))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態において、undefinedな要素を含むwordを含むwordsを持ったshowSentenceActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterIncludeNoWordWords)))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態以外のStateにおいて、showSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        expect(store.getState()).toEqual(showSentenceState2)
    })

    it("初期状態において、sentenceとwords内の単語が一致しないshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameterInvalidSentence)))
        expect(store.getState()).toEqual(initialShowSentenceState)
    })

    it("初期状態以外のStateにおいて、読みが予測不能な単や空白を含むsentenceを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy(showSentenceParameter3)))
        expect(store.getState()).toEqual(showSentenceState3)
    })

    it("初期状態以外のStateにおいて、sentenceのみを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy({
            sentence: sentence2
        })))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordsのみを持ったshowSentenceのActionからshowSentenceのStateを生成する", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy({
            words: words2
        })))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordsを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy({
            sentence: sentence2,
            words: words2.concat(undefined)
        })))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、undefinedな要素を含むwordを含むwordsを持ったshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy({
            sentence: sentence2,
            words: words2.concat(showPOSAndPronunciationState2POSAndWordOnly)
        })))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、sentenceとwords内の単語が一致しないshowSentenceのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showSentence(deepcopy(showSentenceParameterInvalidSentence)))
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
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、posのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、pronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、posとwordのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWordOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、posとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStatePOSAndWSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })

    it("初期状態以外のStateにおいて、wordとpronunciationのみを持ったshowPOSAndPronunciationのActionが渡されたとき、Stateを変更しない", () => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationStateWordAndWSOnly))
        expect(store.getState()).toEqual(showSentenceState)
    })
})
