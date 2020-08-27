import React from 'react'

var numberToWords = require('number-to-words')

const Cell = ({ cell, flip, i, j }) => {
    let life = 'life'
    return (
        <div id={numberToWords.toWords(cell.lifeCount)} className={`cell ${cell.currentStatus ? life : 'dead'}`} onClick={() => flip(i, j)} />
    )
}
export default Cell