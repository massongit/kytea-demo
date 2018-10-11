import React from "react"
import App from "../../containers/App"
import OutputCard from "../../containers/OutputCard"
import InputCard from "../../components/InputCard"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {doSnapshot, functions} from "./Sentence"

const functions2 = [undefined, ...functions]

let store

/**
 * テストの前処理
 */
const beforeProcess = () => (
    shallow(
        <App
            store={store}
        />
    ).dive()
)

describe("containers/PanelCardBody", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("Componentが正しく配置されている", () => {
        doSnapshot(functions2, store, beforeProcess)
    })

    it("子要素にInputCardが含まれる", () => {
        for (const f of functions2) {
            if (f) {
                f(store)
            }

            expect(beforeProcess().children().contains(<InputCard/>)).toBeTruthy()
        }
    })

    it("子要素にOutputCardが正しく配置される", () => {
        for (const v of [[functions2[0], false], [functions2[1], true], [functions2[2], true]]) {
            if (v[0]) {
                v[0](store)
            }

            expect(beforeProcess().children().contains(<OutputCard/>)).toEqual(v[1])
        }
    })
})
