import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import InputCard from "./InputCard"
import DescriptionCard from "./DescriptionCard"
import OutputCard from "../containers/OutputCard"
import {Container} from "reactstrap"

/**
 * pronunciationのPropTypes
 * @type {{pos: *, pronunciation: (*)}}
 */
export const propTypesPronunciation = PropTypes.shape({
    id: PropTypes.number,
    margin: PropTypes.number.isRequired,
    pronunciation: PropTypes.string.isRequired
})

/**
 * PropTypesの一部
 * @type {{pos: *, pronunciation: (*)}}
 */
export const propTypesPart = {
    pos: PropTypes.string.isRequired,
    pronunciation: PropTypes.arrayOf(propTypesPronunciation).isRequired
}

/**
 * PropTypes
 * @type {{words: *}}
 */
export const propTypes = {
    words: PropTypes.arrayOf(PropTypes.shape({
        word: PropTypes.string.isRequired,
        ...propTypesPart
    }).isRequired)
}

/**
 * ルート要素
 */
class App extends React.Component {
    static propTypes = propTypes

    render() {
        return (
            <Container>
                <Header/>
                <DescriptionCard/>
                <InputCard/>
                {
                    (() => {
                        // KyTeaによる解析が行われていない場合には表示しない
                        if (this.props.words && 0 < this.props.words.length) {
                            return (<OutputCard/>)
                        }
                    })()
                }
            </Container>
        )
    }
}

export default App
