import React from 'react'

const Cell = ({ cell, flip, i, j }) => {
    let life = 'life'
    return (
        <div className={`cell ${cell.currentStatus ? life : 'dead'}`} onClick={() => flip(i, j)} />
    )
}
export default Cell