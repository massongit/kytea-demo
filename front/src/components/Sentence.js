import React from "react"
import PropTypes from "prop-types"
import Word from "../containers/Word"
import {ButtonGroup} from "react-bootstrap"

/**
 * 入力文をボタンのグループとして表示するComponent
 */
class Sentence extends React.Component {
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
