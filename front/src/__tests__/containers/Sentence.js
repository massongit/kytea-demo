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
 * showSentenceActionのStoreを作成する
 * @returns {store} Store
 */
export const makeStoreShowSentence = () => {
    const store = createStore(rootReducer)
    store.dispatch(showSentence(deepcopy(showSentenceParameter)))
    return store
}

/**
 * showPOSAndPronunciationActonのStoreを作成する
 * @returns {store} Store
 */
export const makeStoreShowPOSAndPronunciation = () => {
    const store = makeStoreShowSentence()
    store.dispatch(showPOSAndPronunciation(showPOSAndPronunciationState))
    return store
}

/**
 * テストの前処理
 * @param createStore Storeを生成する関数
 */
const beforeProcess = (createStore) => (
    shallow(
        <Sentence
            store={createStore()}
        />
    ).dive()
)

describe("containers/Sentence", () => {
    it("初期状態からStateが遷移した際に、Componentが正しく配置されている", () => {
        for (const f of [makeStoreShowSentence, makeStoreShowPOSAndPronunciation]) {
            expect(beforeProcess(f)).toMatchSnapshot()
        }
    })

    it("初期状態からStateが遷移した際に、子要素にWordが含まれる", () => {
        for (const f of [makeStoreShowSentence, makeStoreShowPOSAndPronunciation]) {
            for (const w of words) {
                expect(beforeProcess(f).contains(
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
