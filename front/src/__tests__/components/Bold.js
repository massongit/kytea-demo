import React from "react"
import Bold from "../../components/Bold"
import {shallow} from "enzyme"

const text = "test"

const div = (
    <div>
        {text}
    </div>
)

const lineComponentDiv = shallow(
    <Bold>
        {div}
    </Bold>
)

describe("components/Bold", () => {
    it("子要素として与えられたElementが正しく挿入されている", () => {
        expect(lineComponentDiv).toMatchSnapshot()
        expect(lineComponentDiv.children().contains(div)).toBeTruthy()
    })

    it("子要素として与えられた文字列が正しく挿入されている", () => {
        const lineComponentText = shallow(
            <Bold>
                {text}
            </Bold>
        )
        expect(lineComponentText).toMatchSnapshot()
        expect(lineComponentText.children().contains(text)).toBeTruthy()
    })
})
