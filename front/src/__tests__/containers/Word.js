import React from "react"
import Word from "../../containers/Word"
import thunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import {loadTranslation, mountWithIntl, shallowWithIntl} from "enzyme-react-intl"
import {eventMock} from "./Input"
import {showPOSAndPronunciation} from "../../actions"
import {
    initialShowPOSAndPronunciationState,
    initialShowSentenceState,
    pos,
    pronunciation_,
    showPOSAndPronunciationState_,
    word
} from "../reducers"

/**
 * StoreMockを作成する
 * @returns {store} StoreMock
 */
const makeStoreMock = () => {
    return configureMockStore([thunk])({
        showSentence: initialShowSentenceState,
        showPOSAndPronunciation: initialShowPOSAndPronunciationState
    })
}

let store, wordComponent

loadTranslation("./src/translations/ja.json")

describe("containers/Word/snapshot", () => {
    it("Componentが正しく配置されている", () => {
        wordComponent = shallowWithIntl(
            <Word
                store={makeStoreMock()}
                word={word}
                pos={pos}
                pronunciation={[pronunciation_]}
            />
        ).dive()
        expect(wordComponent).toMatchSnapshot()
    })
})

describe("containers/Word/other", () => {
    beforeEach(() => {
        store = makeStoreMock()
        wordComponent = mountWithIntl(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={[pronunciation_]}
            />
        )
    })

    it("wordが記述されている", () => {
        expect(wordComponent.contains(word)).toBeTruthy()
    })

    it("onClickイベントが呼び出されたとき、正常にdispatchが行われる", () => {
        wordComponent.simulate("click", eventMock)
        expect(store.getActions()).toEqual([
            showPOSAndPronunciation(showPOSAndPronunciationState_)
        ])
    })
})
