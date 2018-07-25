import React from "react"
import App from "../../containers/App"
import OutputPanel from "../../containers/OutputPanel"
import InputPanel from "../../components/InputPanel"
import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showSentence} from "../../actions"
import {showSentenceParameter} from "../reducers"
import {makeStore} from "./Sentence"

let appComponent

describe("containers/PanelBody/initialState", () => {
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

describe("containers/PanelBody/showSentenceState", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
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

describe("containers/PanelBody/showPOSAndPronunciationState", () => {
    beforeEach(() => {
        appComponent = shallow(
            <App
                store={makeStore()}
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
