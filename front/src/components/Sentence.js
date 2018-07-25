import React from "react"
import {propTypes} from "./App"
import Word from "../containers/Word"
import {ButtonGroup} from "react-bootstrap"

/**
 * 入力文をボタンのグループとして表示するComponent
 */
class Sentence extends React.Component {
    static propTypes = propTypes

    render() {
        if (this.props.words) {
            return (
                <ButtonGroup>
                    {
                        this.props.words.map((word, i) => (
                            <Word
                                key={i}
                                word={word.word}
                                pos={word.pos}
                                pronunciation={word.pronunciation}
                            />
                        ))
                    }
                </ButtonGroup>
            )
        }
    }
}

export default Sentence
