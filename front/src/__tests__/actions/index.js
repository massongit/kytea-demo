import * as types from "../../actions/types"
import {makeShowSentenceAction} from "../reducers"
import {showPOSAndPronunciation, showSentence} from "../../actions"
import {showPOSAndPronunciationState, showSentenceState} from "../../test_data"

/**
 * KyTeaによる解析結果の表示Action
 * @type {{type: string, payload: {sentence: string, words: *[]}}}
 */
const showSentenceAction = {
    type: types.SHOW_SENTENCE,
    payload: showSentenceState
}

const showPOSAndPronunciationAction = {
    type: types.SHOW_PRONUNCIATION,
    payload: showPOSAndPronunciationState
}

const actionEqual = (a, b) => {
    expect(a).toEqual(b)
}

describe("actions/index/showSentence", () => {
    it("valueからActionを生成する", () => {
        actionEqual(makeShowSentenceAction(showSentenceState), showSentenceAction)
    })

    it("valueから異常値を除外してActionを生成する", () => {
        expect(showSentence({
            ...showSentenceState,
            wrong_test: "wrong!"
        })).toEqual(showSentenceAction)
    })
})

describe("actions/index/showPOSAndPronunciation", () => {
    it("valueからActionを生成する", () => {
        actionEqual(showPOSAndPronunciation(showPOSAndPronunciationState), showPOSAndPronunciationAction)
    })

    it("valueから異常値を除外してActionを生成する", () => {
        expect(showPOSAndPronunciation({
            ...showPOSAndPronunciationState,
            wrong_test: "wrong!"
        })).toEqual(showPOSAndPronunciationAction)
    })
})
