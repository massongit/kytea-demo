import * as types from "../../actions/types"
import {makeShowSentenceAction} from "../reducers"
import {showPOSAndPronunciation} from "../../actions"
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

describe("actions/index", () => {
    it("valueからActionを生成する", () => {
        for (const v of [
            [makeShowSentenceAction(showSentenceState), showSentenceAction],
            [showPOSAndPronunciation(showPOSAndPronunciationState), showPOSAndPronunciationAction]
        ]) {
            expect(v[0]).toEqual(v[1])
        }
    })

    it("valueから異常値を除外してActionを生成する", () => {
        for (const v of [
            [makeShowSentenceAction, showSentenceState, showSentenceAction],
            [showPOSAndPronunciation, showPOSAndPronunciationState, showPOSAndPronunciationAction]
        ]) {
            expect(v[0]({
                ...v[1],
                wrong_test: "wrong!"
            })).toEqual(v[2])
        }
    })
})
