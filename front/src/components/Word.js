import React from "react"
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"
import {showPOSAndPronunciation} from "../actions"

/**
 * Sentenceの各ボタン
 * @param dispatch {function} dispatch関数
 * @param word {string} 単語
 * @param pos {array} 品詞
 * @param pronunciation {array} 読み
 * @returns {element} Sentenceの各ボタン
 */
const Word = ({dispatch, word, pos, pronunciation}) => (
    <Button
        onClick={() => {
            // 品詞や読みの表示Actionをdispatchする
            dispatch(showPOSAndPronunciation({
                word: word,
                pos: pos,
                pronunciation: pronunciation
            }))
        }}
    >
        {word}
    </Button>
)

Word.propTypes = {
    dispatch: PropTypes.func.isRequired,
    word: PropTypes.string.isRequired,
    pos: PropTypes.string.isRequired,
    pronunciation: PropTypes.string.isRequired
}

export default Word
