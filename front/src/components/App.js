import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import InputPanel from "./InputPanel"
import DescriptionPanel from "./DescriptionPanel"
import OutputPanel from "../containers/OutputPanel"
import {Grid} from "react-bootstrap"

/**
 * ルート要素
 * @param words {array} KyTeaによる解析結果
 * @returns {element} ルート要素
 */
const App = ({words}) => (
    <Grid>
        <Header/>
        <DescriptionPanel/>
        <InputPanel/>
        {
            (() => {
                // KyTeaによる解析が行われていない場合には表示しない
                if (words !== undefined && 0 < words.length) {
                    return (<OutputPanel/>)
                }
            })()
        }
    </Grid>
)

App.propTypes = {
    words: PropTypes.array
}

export default App
