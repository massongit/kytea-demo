import React from "react"
import Word from "../../containers/Word"
import thunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import {shallow} from "enzyme"
import {eventMock} from "./Input"
import {showPOSAndPronunciation} from "../../actions"
import {
    initialShowSentenceState,
    initialShowPOSAndPronunciationState,
    pos,
    pronunciation_,
    showPOSAndPronunciationState_,
    word
} from "../reducers"

let wordComponent, store

describe("containers/Word", () => {
    beforeEach(() => {
        store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
        wordComponent = shallow(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={[pronunciation_]}
            />
        ).dive()
    })

    it("Componentが正しく配置されている", () => {
        expect(wordComponent).toMatchSnapshot()
    })

    it("wordが記述されている", () => {
        expect(wordComponent.children().contains(word)).toBeTruthy()
    })

    it("onClickイベントが呼び出されたとき、正常にdispatchが行われる", () => {
        wordComponent.simulate("click", eventMock)
        expect(store.getActions()).toEqual([
            showPOSAndPronunciation(showPOSAndPronunciationState_)
        ])
    })
})
