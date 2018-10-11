import React from "react"
import OutputCard from "../../containers/OutputCard"
import Information from "../../containers/Information"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {doSnapshot, functions} from "./Sentence"

let store

/**
 * テストの前処理
 */
const beforeProcess = () => (
    shallow(
        <OutputCard
            store={store}
        />
    ).dive()
)

describe("containers/OutputCard", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("初期状態からStateが遷移した際に、Componentが正しく配置されている", () => {
        doSnapshot(functions, store, beforeProcess)
    })

    it("初期状態からStateが遷移した際に、子要素にInformationが正しく配置されている", () => {
        for (const v of [[functions[0], false], [functions[1], true]]) {
            v[0](store)
            expect(beforeProcess().children().contains(<Information/>)).toEqual(v[1])
        }
    })
})
