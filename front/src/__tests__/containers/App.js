import React from "react"
import App from "../../containers/App"
import OutputPanel from "../../containers/OutputPanel"
import InputPanel from "../../components/InputPanel"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {makeStoreShowPOSAndPronunciation, makeStoreShowSentence} from "./Sentence"

/**
 * テストの前処理
 * @param createStore Storeを生成する関数
 */
const beforeProcess = (createStore) => (
    shallow(
        <App
            store={createStore()}
        />
    ).dive()
)

describe("containers/PanelBody", () => {
    it("Componentが正しく配置されている", () => {
        for (const f of [() => (
            createStore(rootReducer)
        ), makeStoreShowSentence, makeStoreShowPOSAndPronunciation]) {
            expect(beforeProcess(f)).toMatchSnapshot()
        }
    })

    it("子要素にInputPanelが含まれる", () => {
        for (const f of [() => (
            createStore(rootReducer)
        ), makeStoreShowSentence, makeStoreShowPOSAndPronunciation]) {
            expect(beforeProcess(f).children().contains(<InputPanel/>)).toBeTruthy()
        }
    })

    it("子要素にOutputPanelが正しく配置される", () => {
        for (const v of [[() => (
            createStore(rootReducer)
        ), false], [makeStoreShowSentence, true], [makeStoreShowPOSAndPronunciation, true]]) {
            expect(beforeProcess(v[0]).children().contains(<OutputPanel/>)).toEqual(v[1])
        }
    })
})
