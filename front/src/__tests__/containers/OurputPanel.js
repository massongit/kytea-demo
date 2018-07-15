import React from "react"
import OutputPanel from "../../containers/OutputPanel"
import Information from "../../containers/Information"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {showPOSAndPronunciationState, showSentenceState} from "../reducers"

let outputPanelComponent

describe("containers/OutputPanel/showSentenceState", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(showSentenceState))
        outputPanelComponent = shallow(
            <OutputPanel
                store={store}
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
        const store = createStore(rootReducer)
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        outputPanelComponent = shallow(
            <OutputPanel
                store={store}
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
