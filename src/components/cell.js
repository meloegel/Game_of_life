import React from 'react'

var numberToWords = require('number-to-words')

const Cell = ({ cell, flip, i, j }) => {
    let life = 'life'
    return (
        <div className={`cell ${cell.currentStatus ? life : 'dead'}`} id={numberToWords.toWords(cell.lifeCount)} onClick={() => flip(i, j)} />
    )
}
export default Cell