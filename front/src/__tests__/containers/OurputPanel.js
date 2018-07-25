import React from "react"
import OutputPanel from "../../containers/OutputPanel"
import Information from "../../containers/Information"
import {shallow} from "enzyme"
import {makeStoreShowPOSAndPronunciation, makeStoreShowSentence} from "./Sentence"

/**
 * テストの前処理
 * @param createStore Storeを生成する関数
 * @returns {ShallowWrapper}
 */
const beforeProcess = (createStore) => (
    shallow(
        <OutputPanel
            store={createStore()}
        />
    ).dive()
)

let outputPanelComponent

describe("containers/OutputPanel/showSentenceState", () => {
    beforeEach(() => {
        outputPanelComponent = beforeProcess(makeStoreShowSentence)
    })

    it("初期状態からshowSentenceへStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(outputPanelComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、子要素にInformationが含まれない", () => {
        expect(outputPanelComponent.children().contains(<Information/>)).toBeFalsy()
    })
})

describe("containers/OutputPanel/showPOSAndPronunciationState", () => {
    beforeEach(() => {
        outputPanelComponent = beforeProcess(makeStoreShowPOSAndPronunciation)
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(outputPanelComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にInformationが含まれる", () => {
        expect(outputPanelComponent.children().contains(<Information/>)).toBeTruthy()
    })
})
