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

let store

loadTranslation("./src/translations/ja.json")

describe("containers/Word", () => {
    beforeEach(() => {
        store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
    })

    it("Componentが正しく配置されている", () => {
        const wordComponent = shallowWithIntl(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={[pronunciation_]}
            />
        ).dive()
        expect(wordComponent).toMatchSnapshot()
    })

    it("wordが記述されている", () => {
        const wordComponent = mountWithIntl(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={[pronunciation_]}
            />
        )
        expect(wordComponent.contains(word)).toBeTruthy()
    })

    it("onClickイベントが呼び出されたとき、正常にdispatchが行われる", () => {
        const wordComponent = mountWithIntl(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={[pronunciation_]}
            />
        )
        wordComponent.simulate("click", eventMock)
        expect(store.getActions()).toEqual([
            showPOSAndPronunciation(showPOSAndPronunciationState_)
        ])
    })
})
