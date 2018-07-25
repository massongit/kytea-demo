import React from "react"
import Information from "../../containers/Information"
import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import {loadTranslation, mountWithIntl, shallowWithIntl} from "enzyme-react-intl"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {pos, pronunciation, showPOSAndPronunciationState_, showSentenceParameter, word} from "../reducers"

/**
 * Storeを作成する
 * @returns {store} Store
 */
const makeStore = () => {
    const store = createStore(rootReducer)
    store.dispatch(showSentence(deepcopy(showSentenceParameter)))
    store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState_))
    return store
}

let informationComponent

loadTranslation("./src/translations/ja.json")

describe("containers/Information/snapshot", () => {
    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        const informationComponent = shallowWithIntl(
            <Information
                store={makeStore()}
            />
        ).dive()
        expect(informationComponent).toMatchSnapshot()
    })
})

describe("containers/Information/other", () => {
    beforeEach(() => {
        informationComponent = mountWithIntl(
            <Information
                store={makeStore()}
            />
        )
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にposが含まれる", () => {
        expect(informationComponent.contains(pos)).toBeTruthy()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にwordが含まれる", () => {
        expect(informationComponent.contains(word)).toBeTruthy()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にpronunciationが含まれる", () => {
        for (const w of pronunciation) {
            expect(informationComponent.contains(w.pronunciation)).toBeTruthy()
        }
    })
})
