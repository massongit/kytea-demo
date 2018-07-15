import React from "react"
import App from "../../containers/App"
import OutputPanel from "../../containers/OutputPanel"
import rootReducer from "../../reducers"
import InputPanel from "../../components/InputPanel"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {showPOSAndPronunciationState, showSentenceState} from "../reducers"

let appComponent

describe("containers/App/initialState", () => {
    beforeEach(() => {
        appComponent = shallow(
            <App
                store={createStore(rootReducer)}
            />
        ).dive()
    })

    it("初期状態において、Componentが正しく配置されている", () => {
        expect(appComponent).toMatchSnapshot()
    })

    it("初期状態において、子要素にInputPanelが含まれる", () => {
        expect(appComponent.children().contains(<InputPanel/>)).toBeTruthy()
    })

    it("初期状態において、子要素にOutputPanelが含まれない", () => {
        expect(appComponent.children().contains(<OutputPanel/>)).toBeFalsy()
    })
})

describe("containers/App/showSentenceState", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(showSentenceState))
        appComponent = shallow(
            <App
                store={store}
            />
        ).dive()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(appComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、子要素にInputPanelが含まれる", () => {
        expect(appComponent.children().contains(<InputPanel/>)).toBeTruthy()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、子要素にOutputPanelが含まれる", () => {
        expect(appComponent.children().contains(<OutputPanel/>)).toBeTruthy()
    })
})

describe("containers/App/showPOSAndPronunciationState", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        appComponent = shallow(
            <App
                store={store}
            />
        ).dive()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(appComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にInputPanelが含まれる", () => {
        expect(appComponent.children().contains(<InputPanel/>)).toBeTruthy()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にOutputPanelが含まれる", () => {
        expect(appComponent.children().contains(<OutputPanel/>)).toBeTruthy()
    })
})
