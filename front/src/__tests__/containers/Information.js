import React from "react"
import Information from "../../containers/Information"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {pos, pronunciation, showPOSAndPronunciationState, showSentenceState, word} from "../reducers"

let informationComponent

describe("containers/Information", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(showSentenceState))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
        informationComponent = shallow(
            <Information
                store={store}
            />
        ).dive()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(informationComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にposが含まれる", () => {
        expect(informationComponent.children().contains(pos)).toBeTruthy()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にwordが含まれる", () => {
        expect(informationComponent.children().contains(word)).toBeTruthy()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にpronunciationが含まれる", () => {
        expect(informationComponent.children().contains(pronunciation)).toBeTruthy()
    })
})
