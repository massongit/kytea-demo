import React from "react"
import Sentence from "../../containers/Sentence"
import Word from "../../containers/Word"
import deepcopy from "deepcopy"
import rootReducer from "../../reducers"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {showPOSAndPronunciationState, showSentenceParameter, words} from "../reducers"

export const fs = [
    store => {
        store.dispatch(showSentence(deepcopy(showSentenceParameter)))
    },
    store => {
        store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
    }
]

let store

/**
 * テストの前処理
 */
const beforeProcess = () => (
    shallow(
        <Sentence
            store={store}
        />
    ).dive()
)

describe("containers/Sentence", () => {
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("初期状態からStateが遷移した際に、Componentが正しく配置されている", () => {
        for (const f of fs) {
            f(store)
            expect(beforeProcess()).toMatchSnapshot()
        }
    })

    it("初期状態からStateが遷移した際に、子要素にWordが含まれる", () => {
        for (const f of fs) {
            for (const w of words) {
                f(store)
                expect(beforeProcess().contains(
                    <Word
                        word={w.word}
                        pos={w.pos}
                        pronunciation={w.pronunciation}
                    />
                )).toBeTruthy()
            }
        }
    })
})
