import React from "react"
import PanelCardBody from "../../containers/PanelCardBody"
import InputSentence from "../../containers/InputSentence"
import rootReducer from "../../reducers"
import {CardBody} from "reactstrap"
import {loadTranslation, mountWithIntl, shallowWithIntl} from "enzyme-react-intl"
import {createStore} from "redux"

loadTranslation("./src/translations/ja.json")

describe("containers/PanelCardBody", () => {
    it("Componentが正しく配置されている", () => {
        const panelBodyComponent = shallowWithIntl(
            <PanelCardBody messageId="description.input">
                <InputSentence/>
            </PanelCardBody>
        ).dive()
        expect(panelBodyComponent).toMatchSnapshot()
    })

    it("CardBodyの直下に子要素が入っている", () => {
        const panelBodyComponent = mountWithIntl(
            <PanelCardBody messageId="description.input">
                <InputSentence
                    store={createStore(rootReducer)}
                />
            </PanelCardBody>
        )
        expect(panelBodyComponent.find(CardBody).children().contains(InputSentence)).toBeTruthy()
    })
})
