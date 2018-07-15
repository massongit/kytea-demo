import thunk from "redux-thunk"
import fetch from "node-fetch"
import configureMockStore from "redux-mock-store"
import React from "react"
import Input from "../../containers/Input"
import {mount, shallow} from "enzyme"
import {Form, FormControl} from "react-bootstrap"
import {showSentence} from "../../actions"
import {
    initialShowPronunciationState,
    initialShowSentenceState,
    rootStateAfterShowSentence,
    sentence,
    sentence2,
    showSentenceState,
    showSentenceState2,
    words,
    words2
} from "../reducers"

export const eventMock = {
    preventDefault: jest.fn()
}

describe("containers/Input", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("Componentが正しく配置されている", () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPronunciationState
        })
        const inputComponent = shallow(
            <Input
                store={store}
            />
        ).dive()
        expect(inputComponent).toMatchSnapshot()
    })

    it("Formになっている", () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPronunciationState
        })
        const inputComponent = shallow(
            <Input
                store={store}
            />
        ).dive()
        expect(inputComponent.props().bsClass).toEqual((<Form/>).props.bsClass)
    })

    it("onSubmitイベントが呼び出されたとき、サーバーへのSubmitが行われない", async () => {
        const store = configureMockStore([thunk])({
            showSentence: initialShowSentenceState,
            showPOSAndPronunciation: initialShowPronunciationState
        })
        const inputComponent = mount(
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
            showPOSAndPronunciation: initialShowPronunciationState
        })
        const inputComponent = mount(
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
            showPOSAndPronunciation: initialShowPronunciationState
        })
        const inputComponent = mount(
            <Input
                store={store}
            />
        )
        inputComponent.find(FormControl).children().instance().value = sentence
        fetch.mockResponse(JSON.stringify(words))
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(fetch.mock.calls).toHaveLength(1)
        expect(store.getActions()).toEqual([showSentence(showSentenceState)])
    })

    it("前回と同じ入力内容でonSubmitイベントを呼び出したとき、fetchやdispatchが行われない", async () => {
        const store = configureMockStore([thunk])(rootStateAfterShowSentence)
        const inputComponent = mount(
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
        const inputComponent = mount(
            <Input
                store={store}
            />
        )
        inputComponent.find(FormControl).children().instance().value = sentence2
        fetch.mockResponse(JSON.stringify(words2))
        await inputComponent.find(Form).props().onSubmit(eventMock)
        expect(fetch.mock.calls).toHaveLength(1)
        expect(store.getActions()).toEqual([showSentence(showSentenceState2)])
    })
})
