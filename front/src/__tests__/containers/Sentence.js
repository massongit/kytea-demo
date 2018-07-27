import React from "react"
import Sentence from "../../containers/Sentence"
import Word from "../../containers/Word"
import rootReducer from "../../reducers"
import words from "../../test_data/words"
import {shallow} from "enzyme"
import {createStore} from "redux"
import {dispatchActions, makeShowSentenceAction} from "../reducers"
import {showPOSAndPronunciation} from "../../actions"
import {showPOSAndPronunciationState, showSentenceState} from "../../test_data"

export const functions = [
    store => {
        dispatchActions(store, [makeShowSentenceAction(showSentenceState)])
    },
    store => {
        dispatchActions(store, [showPOSAndPronunciation(showPOSAndPronunciationState)])
    }
]

export const doSnapshot = (fs, store, g) => {
    for (const f of fs) {
        if (f) {
            f(store)
        }

        expect(g()).toMatchSnapshot()
    }
}

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
        doSnapshot(functions, store, beforeProcess)
    })

    it("初期状態からStateが遷移した際に、子要素にWordが含まれる", () => {
        for (const f of functions) {
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
