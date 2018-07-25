import React from "react"
import OutputPanel from "../../containers/OutputPanel"
import Information from "../../containers/Information"
import {shallow} from "enzyme"
import {makeStoreShowPOSAndPronunciation, makeStoreShowSentence} from "./Sentence"

/**
 * テストの前処理
 * @param createStore Storeを生成する関数
 */
const beforeProcess = (createStore) => (
    shallow(
        <OutputPanel
            store={createStore()}
        />
    ).dive()
)

describe("containers/OutputPanel", () => {
    it("初期状態からStateが遷移した際に、Componentが正しく配置されている", () => {
        for (const f of [makeStoreShowSentence, makeStoreShowPOSAndPronunciation]) {
            expect(beforeProcess(f)).toMatchSnapshot()
        }
    })

    it("初期状態からStateが遷移した際に、子要素にInformationが含まれない", () => {
        for (const v of [[makeStoreShowSentence, false], [makeStoreShowPOSAndPronunciation, true]]) {
            expect(beforeProcess(v[0]).children().contains(<Information/>)).toEqual(v[1])
        }
    })
})
