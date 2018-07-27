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

export const dispatchActions = (store, actions) => {
    for (const action of actions) {
        store.dispatch(action)
    }
}

export const makeShowSentenceAction = (p) => (
    showSentence(deepcopy(p))
)

export const dispatchShowSentenceAndShowPOSAndPronunciation = (store, d) => {
    dispatchActions(store, [
        makeShowSentenceAction(showSentenceState),
        showPOSAndPronunciation(d)
    ])
}

export const storeEqual = (store, s) => {
    expect(store.getState()).toEqual(s)
}

export const dispatchEqual = (store, p, s) => {
    dispatchActions(store, p)
    storeEqual(store, s)
}

export const dispatchShowSentenceEqual = (store, p, s) => {
    dispatchEqual(store, [makeShowSentenceAction(p)], s)
}

export const dispatchShowPOSAndPronunciationEqual = (store, p, s) => {
    dispatchEqual(store, [showPOSAndPronunciation(p)], s)
}

export const dispatchDoubleShowSentenceEqual = (store, p, s) => {
    dispatchEqual(store, [
        makeShowSentenceAction(showSentenceState),
        makeShowSentenceAction(p)
    ], s)
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
        dispatchShowSentenceEqual(store, showSentenceState, rootStateAfterShowSentence)
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, {
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store, [
            makeShowSentenceAction(showSentenceState),
            showPOSAndPronunciation(showPOSAndPronunciationState),
            makeShowSentenceAction(showSentenceState2)
        ], showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                makeShowSentenceAction(showSentenceState),
                showPOSAndPronunciation(showPOSAndPronunciationState),
                showPOSAndPronunciation(showPOSAndPronunciationState2)
            ],
            {
                showSentence: showSentenceState,
                showPOSAndPronunciation: showPOSAndPronunciationState2
            }
        )
    })

    it("初期状態からshowSentence, showPOSAndPronunciation, showPOSAndPronunciation, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store, [
            makeShowSentenceAction(showSentenceState),
            showPOSAndPronunciation(showPOSAndPronunciationState),
            showPOSAndPronunciation(showPOSAndPronunciationState2),
            makeShowSentenceAction(showSentenceState2)
        ], showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からshowSentence, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchDoubleShowSentenceEqual(store, showSentenceState2, showSentenceState2AndInitialShowPOSAndPronunciationState)
    })


    it("初期状態からshowSentence, showSentence, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                makeShowSentenceAction(showSentenceState),
                makeShowSentenceAction(showSentenceState2),
                showPOSAndPronunciation(showPOSAndPronunciationState)
            ],
            {
                showSentence: showSentenceState2,
                showPOSAndPronunciation: showPOSAndPronunciationState
            }
        )
    })

    it("初期状態からshowSentence, showSentence, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                makeShowSentenceAction(showSentenceState),
                makeShowSentenceAction(showSentenceState2),
                showPOSAndPronunciation(showPOSAndPronunciationState),
                showPOSAndPronunciation(showPOSAndPronunciationState2)
            ],
            {
                showSentence: showSentenceState2,
                showPOSAndPronunciation: showPOSAndPronunciationState2
            }
        )
    })
})
