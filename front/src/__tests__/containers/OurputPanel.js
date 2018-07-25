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
    it("初期状態からshowSentenceへStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(beforeProcess(makeStoreShowSentence)).toMatchSnapshot()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、子要素にInformationが含まれない", () => {
        expect(beforeProcess(makeStoreShowSentence).children().contains(<Information/>)).toBeFalsy()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(beforeProcess(makeStoreShowPOSAndPronunciation)).toMatchSnapshot()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にInformationが含まれる", () => {
        expect(beforeProcess(makeStoreShowPOSAndPronunciation).children().contains(<Information/>)).toBeTruthy()
    })
})
