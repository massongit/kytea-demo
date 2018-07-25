import React from "react"
import OutputPanel from "../../containers/OutputPanel"
import Information from "../../containers/Information"
import {shallow} from "enzyme"
import {fs} from "./Sentence"
import rootReducer from "../../reducers"
import {createStore} from "redux"

let store

/**
 * テストの前処理
 */
const beforeProcess = () => (
    shallow(
        <OutputPanel
            store={store}
        />
    ).dive()
)

describe("containers/OutputPanel", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("初期状態からStateが遷移した際に、Componentが正しく配置されている", () => {
        for (const f of fs) {
            f(store)
            expect(beforeProcess()).toMatchSnapshot()
        }
    })

    it("初期状態からStateが遷移した際に、子要素にInformationが正しく配置されている", () => {
        for (const v of [[fs[0], false], [fs[1], true]]) {
            v[0](store)
            expect(beforeProcess().children().contains(<Information/>)).toEqual(v[1])
        }
    })
})
