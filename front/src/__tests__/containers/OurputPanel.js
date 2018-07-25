import React from "react"
import OutputPanel from "../../containers/OutputPanel"
import Information from "../../containers/Information"
import {shallow} from "enzyme"
import {makeStoreShowPOSAndPronunciation, makeStoreShowSentence} from "./Sentence"

let outputPanelComponent

describe("containers/OutputPanel/showSentenceState", () => {
    beforeEach(() => {
        outputPanelComponent = shallow(
            <OutputPanel
                store={makeStoreShowSentence()}
            />
        ).dive()
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
        outputPanelComponent = shallow(
            <OutputPanel
                store={makeStoreShowPOSAndPronunciation()}
            />
        ).dive()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(outputPanelComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にInformationが含まれる", () => {
        expect(outputPanelComponent.children().contains(<Information/>)).toBeTruthy()
    })
})
