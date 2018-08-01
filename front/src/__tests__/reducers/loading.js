import loadingReducer from "../../reducers/loading"
import loadingState from "../../test_data/loadingState"
import emptyLoadingAction from "../../test_data/emptyLoadingAction"
import initialLoadingState from "../../test_data/initialLoadingState"
import {createStore} from "redux"
import {dispatchEqual, dispatchLoadingEqual, makeShowSentenceAction, storeEqual} from "./index"
import {loading} from "../../actions"
import {showSentenceState} from "../../test_data"

let store

describe("reducers/loading", () => {
    beforeEach(() => {
        store = createStore(loadingReducer)
    })

    it("初期状態を正しく保持している", () => {
        storeEqual(store, initialLoadingState)
    })

    it("初期状態において、loadingのActionからloadingのStateを生成する", () => {
        dispatchLoadingEqual(store, loadingState, loadingState)
    })

    it("初期状態において、空のloadingのActionが渡されたとき、Stateを変更しない", () => {
        dispatchLoadingEqual(store, emptyLoadingAction, initialLoadingState)
    })

    it("初期状態以外のStateにおいて、loadingのActionからloadingのStateを生成する", () => {
        dispatchEqual(store,
            [
                loading(loadingState),
                makeShowSentenceAction(showSentenceState),
                loading(initialLoadingState)
            ], initialLoadingState)
    })

    it("初期状態以外のStateにおいて、空のloadingのActionが渡されたとき、Stateを変更しない", () => {
        dispatchEqual(store,
            [
                loading(loadingState),
                makeShowSentenceAction(showSentenceState),
                loading(emptyLoadingAction)
            ], loadingState)
    })
})
