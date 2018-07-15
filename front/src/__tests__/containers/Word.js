import thunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import React from "react"
import Word from "../../containers/Word"
import {Button} from "react-bootstrap"
import {shallow} from "enzyme"
import {eventMock} from "./Input"
import {showPOSAndPronunciation} from "../../actions"
import {
    initialShowPronunciationState,
    initialShowSentenceState,
    pos,
    pronunciation,
    showPOSAndPronunciationState,
    word
} from "../reducers"

let wordComponent, store

describe("containers/Word", () => {
    beforeEach(() => {
        store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPronunciationState
        })
        wordComponent = shallow(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={pronunciation}
            />
        ).dive()
    })

    it("Componentが正しく配置されている", () => {
        expect(wordComponent).toMatchSnapshot()
    })

    it("Buttonになっている", () => {
        expect(wordComponent.props().bsClass).toEqual((<Button/>).props.bsClass)
    })

    it("wordが記述されている", () => {
        expect(wordComponent.children().contains(word)).toBeTruthy()
    })

    it("onClickイベントが呼び出されたとき、正常にdispatchが行われる", () => {
        wordComponent.simulate("click", eventMock)
        expect(store.getActions()).toEqual([
            showPOSAndPronunciation(showPOSAndPronunciationState)
        ])
    })
})
