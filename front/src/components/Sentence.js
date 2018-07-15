import React from "react"
import PropTypes from "prop-types"
import {ButtonGroup} from "react-bootstrap"
import Word from "../containers/Word"

/**
 * 入力文をボタンのグループとして表示するComponent
 * @param words {array} 文
 * @returns {element} 入力文をボタンのグループとして表示するComponent
 */
const Sentence = ({words}) => (
    <ButtonGroup>
        {
            (() => {
                if (words !== undefined) {
                    return words.map((word, i) => (
                        <Word
                            key={i}
                            word={word.word}
                            pos={word.pos}
                            pronunciation={word.pronunciation}
                        />
                    ))
                }
            })()
        }
    </ButtonGroup>
)

Sentence.propTypes = {
    words: PropTypes.array
}

export default Sentence
