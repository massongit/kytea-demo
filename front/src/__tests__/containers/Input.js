import React from "react"
import Input from "../../containers/Input"
import thunk from "redux-thunk"
import fetch from "node-fetch"
import configureMockStore from "redux-mock-store"
import words from "../../test_data/words"
import showSentenceState2 from "../../test_data/showSentenceState2"
import initialShowSentenceState from "../../test_data/initialShowSentenceState"
import initialShowPOSAndPronunciationState from "../../test_data/initialShowPOSAndPronunciationState"
import {Form, FormControl} from "react-bootstrap"
import {loadTranslation, mountWithIntl, shallowWithIntl} from "enzyme-react-intl"
import {makeShowSentenceAction} from "../reducers"
import {rootStateAfterShowSentence, sentence, sentence2, showSentenceState, words2} from "../../test_data"

export const eventMock = {
    preventDefault: jest.fn()
}

loadTranslation("./src/translations/ja.json")

describe("containers/Input", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("Componentが正しく配置されている", () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
        const inputComponent = shallowWithIntl(
            <Input
                store={store}
            />
        ).dive()
        expect(inputComponent).toMatchSnapshot()
    })

    it("Formになっている", () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
        const inputComponent = mountWithIntl(
            <Input
                store={store}
            />
        )
        expect(inputComponent.contains(Form)).toBeTruthy()
    })

    it("onSubmitイベントが呼び出されたとき、サーバーへのSubmitが行われない", async () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
        const inputComponent = mountWithIntl(
            <Input
                store={store}
            />
        )
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(eventMock.preventDefault.mock.calls).toHaveLength(1)
    })

    it("入力文が空の状態で、onSubmitイベントが呼び出されたとき、fetchとdispatchが行われない", async () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
        const inputComponent = mountWithIntl(
            <Input
                store={store}
            />
        )
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(fetch.mock.calls).toHaveLength(0)
        expect(store.getActions()).toHaveLength(0)
    })

    it("入力文が入力された状態で、onSubmitイベントが呼び出されたとき、fetchとdispatchが正常に行われる", async () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPOSAndPronunciationState
        })
        const inputComponent = mountWithIntl(
            <Input
                store={store}
            />
        )
        inputComponent.find(FormControl).children().instance().value = sentence
        fetch.mockResponse(JSON.stringify(words))
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(fetch.mock.calls).toHaveLength(1)
        expect(store.getActions()).toEqual([makeShowSentenceAction(showSentenceState)])
    })

    it("前回と同じ入力内容でonSubmitイベントを呼び出したとき、fetchやdispatchが行われない", async () => {
        const store = configureMockStore([thunk])(rootStateAfterShowSentence)
        const inputComponent = mountWithIntl(
            <Input
                store={store}
            />
        )
        inputComponent.find(FormControl).children().instance().value = sentence
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(fetch.mock.calls).toHaveLength(0)
        expect(store.getActions()).toHaveLength(0)
    })

    it("前回とは違う入力内容でonSubmitイベントを呼び出したとき、fetchやdispatchが正常に行われる", async () => {
        const store = configureMockStore([thunk])(rootStateAfterShowSentence)
        const inputComponent = mountWithIntl(
            <Input
                store={store}
            />
        )
        inputComponent.find(FormControl).children().instance().value = sentence2
        fetch.mockResponse(JSON.stringify(words2))
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(fetch.mock.calls).toHaveLength(1)
        expect(store.getActions()).toEqual([makeShowSentenceAction(showSentenceState2)])
    })
})
