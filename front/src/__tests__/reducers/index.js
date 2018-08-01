import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import loadingState from "../../test_data/loadingState"
import showSentenceState2 from "../../test_data/showSentenceState2"
import initialLoadingState from "../../test_data/initialLoadingState"
import initialShowSentenceState from "../../test_data/initialShowSentenceState"
import initialShowPOSAndPronunciationState from "../../test_data/initialShowPOSAndPronunciationState"
import {createStore} from "redux"
import {loading, showPOSAndPronunciation, showSentence} from "../../actions"
import {
    rootStateAfterShowSentence,
    showPOSAndPronunciationState,
    showPOSAndPronunciationState2,
    showSentenceState
} from "../../test_data"

const showSentenceState2AndInitialShowPOSAndPronunciationState = {
    loading: initialLoadingState,
    showSentence: showSentenceState2,
    showPOSAndPronunciation: initialShowPOSAndPronunciationState
}

export const dispatchActions = (store, actions) => {
    if (!(actions instanceof Array)) {
        actions = [actions]
    }

    for (const action of actions) {
        store.dispatch(action)
    }
}

const makeAction = (ps, f) => {
    if (ps instanceof Array) {
        return ps.map(p => (
            f(p)
        ))
    } else {
        return f(ps)
    }
}

export const makeShowSentenceAction = ps => (
    makeAction(ps, p => (
        showSentence(deepcopy(p))
    ))
)

export const makeShowPOSAndPronunciationAction = ps => (
    makeAction(ps, p => (
        showPOSAndPronunciation(p)
    ))
)

export const dispatchShowSentenceAndShowPOSAndPronunciation = (store, d) => {
    dispatchActions(store, [
        loading(loadingState),
        makeShowSentenceAction(showSentenceState),
        loading(initialLoadingState),
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
    dispatchEqual(store,
        [
            loading(loadingState),
            makeShowSentenceAction(p),
            loading(initialLoadingState)
        ], s)
}

export const dispatchShowPOSAndPronunciationEqual = (store, p, s) => {
    dispatchEqual(store, showPOSAndPronunciation(p), s)
}

export const dispatchLoadingEqual = (store, p, s) => {
    dispatchEqual(store, loading(p), s)
}

export const dispatchDoubleShowSentenceEqual = (store, p, s) => {
    dispatchEqual(store,
        [
            loading(loadingState),
            makeShowSentenceAction(showSentenceState),
            loading(initialLoadingState),
            loading(loadingState),
            makeShowSentenceAction(p),
            loading(initialLoadingState)
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
            loading: initialLoadingState,
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
    })

    it("初期状態からloadingへStateが遷移した際に、正しいStateを返す", () => {
        dispatchLoadingEqual(store, loadingState, {
            loading: loadingState,
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
    })

    it("初期状態からloading, showSentenceとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                loading(loadingState),
                makeShowSentenceAction(showSentenceState)
            ],
            {
                loading: loadingState,
                showSentence: showSentenceState,
                showPOSAndPronunciation: initialShowPOSAndPronunciationState
            }
        )
    })

    it("初期状態からloading, showSentence, loadingとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceEqual(store, showSentenceState, rootStateAfterShowSentence)
    })

    it("初期状態からloading, showSentence, loading, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchShowSentenceAndShowPOSAndPronunciationEqual(store, showPOSAndPronunciationState, {
            loading: initialLoadingState,
            showSentence: showSentenceState,
            showPOSAndPronunciation: showPOSAndPronunciationState
        })
    })

    it("初期状態からloading, showSentence, loading, showPOSAndPronunciation, loading, showSentence, loadingとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store, [
            loading(loadingState),
            makeShowSentenceAction(showSentenceState),
            loading(initialLoadingState),
            showPOSAndPronunciation(showPOSAndPronunciationState),
            loading(loadingState),
            makeShowSentenceAction(showSentenceState2),
            loading(initialLoadingState),
        ], showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からloading, showSentence, loading, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                loading(loadingState),
                makeShowSentenceAction(showSentenceState),
                loading(initialLoadingState),
                ...makeShowPOSAndPronunciationAction([
                    showPOSAndPronunciationState,
                    showPOSAndPronunciationState2
                ])
            ],
            {
                loading: initialLoadingState,
                showSentence: showSentenceState,
                showPOSAndPronunciation: showPOSAndPronunciationState2
            }
        )
    })

    it("初期状態からloading, showSentence, loading, showPOSAndPronunciation, showPOSAndPronunciation, loading, showSentence, loadingとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                loading(loadingState),
                makeShowSentenceAction(showSentenceState),
                loading(initialLoadingState),
                ...makeShowPOSAndPronunciationAction([
                    showPOSAndPronunciationState,
                    showPOSAndPronunciationState2]
                ),
                loading(loadingState),
                makeShowSentenceAction(showSentenceState2),
                loading(initialLoadingState)
            ],
            showSentenceState2AndInitialShowPOSAndPronunciationState)
    })

    it("初期状態からloading, showSentence, loading, loading, showSentence, loadingとStateが遷移した際に、正しいStateを返す", () => {
        dispatchDoubleShowSentenceEqual(store, showSentenceState2, showSentenceState2AndInitialShowPOSAndPronunciationState)
    })


    it("初期状態からloading, showSentence, loading, loading, showSentence, loading, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [
                loading(loadingState),
                makeShowSentenceAction(showSentenceState),
                loading(initialLoadingState),
                loading(loadingState),
                makeShowSentenceAction(showSentenceState2),
                loading(initialLoadingState),
                makeShowPOSAndPronunciationAction(showPOSAndPronunciationState)
            ],
            {
                loading: initialLoadingState,
                showSentence: showSentenceState2,
                showPOSAndPronunciation: showPOSAndPronunciationState
            }
        )
    })

    it("初期状態からloading, showSentence, loading, loading, showSentence, loading, showPOSAndPronunciation, showPOSAndPronunciationとStateが遷移した際に、正しいStateを返す", () => {
        dispatchEqual(store,
            [

                loading(loadingState),
                makeShowSentenceAction(showSentenceState),
                loading(initialLoadingState),
                loading(loadingState),
                makeShowSentenceAction(showSentenceState2),
                loading(initialLoadingState),
                ...makeShowPOSAndPronunciationAction([
                    showPOSAndPronunciationState,
                    showPOSAndPronunciationState2
                ])
            ],
            {
                loading: initialLoadingState,
                showSentence: showSentenceState2,
                showPOSAndPronunciation: showPOSAndPronunciationState2
            }
        )
    })
})
