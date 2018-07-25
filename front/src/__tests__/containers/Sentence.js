import React from "react"
import Sentence from "../../containers/Sentence"
import Word from "../../containers/Word"
import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {showPOSAndPronunciationState, showSentenceParameter, words} from "../reducers"

/**
 * Storeを作成する
 * @returns {store} Store
 */
export const makeStore = () => {
    const store = createStore(rootReducer)
    store.dispatch(showSentence(deepcopy(showSentenceParameter)))
    store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
    return store
}

let sentenceComponent

describe("containers/Sentence/showSentence", () => {
    beforeEach(() => {
        const store = createStore(rootReducer)
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
        sentenceComponent = shallow(
            <Sentence
                store={store}
            />
        ).dive()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(sentenceComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentenceへStateが遷移した際に、子要素にWordが含まれる", () => {
        for (const w of words) {
            expect(sentenceComponent.contains(
                <Word
                    word={w.word}
                    pos={w.pos}
                    pronunciation={w.pronunciation}
                />
            )).toBeTruthy()
        }
    })
})

describe("containers/Sentence/showPOSAndPronunciation", () => {
    beforeEach(() => {
        sentenceComponent = shallow(
            <Sentence
                store={makeStore()}
            />
        ).dive()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、Componentが正しく配置されている", () => {
        expect(sentenceComponent).toMatchSnapshot()
    })

    it("初期状態からshowSentence, showPOSAndPronunciationとStateが遷移した際に、子要素にWordが含まれる", () => {
        for (const w of words) {
            expect(sentenceComponent.contains(
                <Word
                    word={w.word}
                    pos={w.pos}
                    pronunciation={w.pronunciation}
                />
            )).toBeTruthy()
        }
    })
})
