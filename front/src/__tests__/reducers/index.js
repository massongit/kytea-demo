import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import showSentenceState2 from "../../test_data/showSentenceState2"
import initialShowSentenceState from "../../test_data/initialShowSentenceState"
import initialShowPOSAndPronunciationState from "../../test_data/initialShowPOSAndPronunciationState"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {
    rootStateAfterShowSentence,
    showPOSAndPronunciationState,
    showPOSAndPronunciationState2,
    showSentenceState
} from "../../test_data"

const showSentenceState2AndInitialShowPOSAndPronunciationState = {
    showSentence: showSentenceState2,
    showPOSAndPronunciation: initialShowPOSAndPronunciationState
}

const dispatchDoubleShowSentence = (store, d) => {
    store.dispatch(showSentence(deepcopy(showSentenceState)))
    store.dispatch(showSentence(deepcopy(d)))
}

export const dispatchShowSentenceAndShowPOSAndPronunciation = (store, d) => {
    store.dispatch(showSentence(deepcopy(showSentenceState)))
    store.dispatch(showPOSAndPronunciation(d))
}

export const storeEqual = (store, s) => {
    expect(store.getState()).toEqual(s)
}

const dispatchEqual = (store, p, s) => {
    store.dispatch(p)
    storeEqual(store, s)
}

export const dispatchShowSentenceEqual = (store, p, s) => {
    dispatchEqual(store, showSentence(deepcopy(p)), s)
}

export const dispatchShowPOSAndPronunciationEqual = (store, p, s) => {
    dispatchEqual(store, showPOSAndPronunciation(p), s)
}

export const dispatchDoubleShowSentenceEqual = (store, p, s) => {
    dispatchDoubleShowSentence(store, p)
    storeEqual(store, s)
}

export const dispatchShowSentenceAndShowPOSAndPronunciationEqual = (store, s, ss) => {
    dispatchShowSentenceAndShowPOSAndPronunciation(store, s)
    storeEqual(store, ss)
}

let store

describe("reducers/index", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("初期状態を正しく保持している", () => {
        storeEqual(store, {
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentenceへStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciation(store, showSentenceState, rootStateAfterShowSentence)
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, {
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciation(store, showPOSAndPronunciationState)
        dispatchShowSentenceEqual(store, showSentenceState2, showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciation(store, showPOSAndPronunciationState)
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState2, {
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState2
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciation(store, showPOSAndPronunciationState)
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        store.dispatch(showSentence(deepcopy(showSentenceState2)))
        storeEqual(store, showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からshowSentence, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchDoubleShowSentenceEqual(store, showSentenceState2, showSentenceState2AndInitialShowPOSAndPronunciationState)
    })


    it("初期状態からshowSentence, showSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchDoubleShowSentence(store, showSentenceState2)
        dispatchShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, {
            showSentence: showSentenceState2,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchDoubleShowSentence(store, showSentenceState2)
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState2))
        storeEqual(store, {
            showSentence: showSentenceState2,
            showPOSAndPronunciation: showPOSAndPronunciationState2
        })
    })
})
