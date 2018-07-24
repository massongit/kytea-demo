import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import InputPanel from "./InputPanel"
import DescriptionPanel from "./DescriptionPanel"
import OutputPanel from "../containers/OutputPanel"
import {Grid} from "react-bootstrap"

/**
 * ルート要素
 */
class App extends React.Component {
    static propTypes = {
        words: PropTypes.arrayOf(PropTypes.shape({
            pos: PropTypes.string.isRequired,
            word: PropTypes.string.isRequired,
            pronunciation: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                margin: PropTypes.number.isRequired,
                pronunciation: PropTypes.string.isRequired
            })).isRequired
        }).isRequired)
    }

    render() {
        return (
            <Grid>
                <Header/>
                <DescriptionPanel/>
                <InputPanel/>
                {
                    (() => {
                        // KyTeaによる解析が行われていない場合には表示しない
                        if (this.props.words && 0 < this.props.words.length) {
                            return (<OutputPanel/>)
                        }
                    })()
                }
            </Grid>
        )
    }
}

export default App
