import React from "react"
import Information from "../../containers/Information"
import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {pos, pronunciation, showPOSAndPronunciationState_, showSentenceParameter, word} from "../reducers"

let informationComponent

describe("containers/Information", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState_))
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
        for (const w of pronunciation) {
            expect(informationComponent.children().contains(w.pronunciation)).toBeTruthy()

        }
    })
})
