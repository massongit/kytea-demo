import React from "react"
import Word from "../../containers/Word"
import thunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import initialShowSentenceState from "../../test_data/initialShowSentenceState"
import initialShowPOSAndPronunciationState from "../../test_data/initialShowPOSAndPronunciationState"
import {loadTranslation, mountWithIntl, shallowWithIntl} from "enzyme-react-intl"
import {eventMock} from "./InputSentence"
import {showPOSAndPronunciation} from "../../actions"
import {pos, pronunciation__, showPOSAndPronunciationState_, word} from "../../test_data"

/**
 * StoreMockを作成する
 * @returns {store} StoreMock
 */
const makeStoreMock = () => (
    configureMockStore([thunk])({
        showSentence: initialShowSentenceState,
        showPOSAndPronunciation: initialShowPOSAndPronunciationState
    })
)

let store, wordComponent

loadTranslation("./src/translations/ja.json")

describe("containers/Word/snapshot", () => {
    it("Componentが正しく配置されている", () => {
        wordComponent = shallowWithIntl(
            <Word
                store={makeStoreMock()}
                word={word}
                pos={pos}
                pronunciation={[pronunciation__]}
            />
        ).dive()
        expect(wordComponent).toMatchSnapshot()
    })
})

describe("containers/Word/other", () => {
    beforeEach(() => {
        store = makeStoreMock()
        wordComponent = mountWithIntl(
            <Word
                store={store}
                word={word}
                pos={pos}
                pronunciation={[pronunciation__]}
            />
        )
    })

    it("wordが記述されている", () => {
        expect(wordComponent.contains(word)).toBeTruthy()
    })

    it("onClickイベントが呼び出されたとき、正常にdispatchが行われる", () => {
        wordComponent.simulate("click", eventMock)
        expect(store.getActions()).toEqual([showPOSAndPronunciation(showPOSAndPronunciationState_)])
    })
})
