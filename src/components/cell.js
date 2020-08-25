import React from 'react'

const Cell = ({ cell, click, i, j }) => {
    let phase = 'phaseOne'
    return (
        <div className={`cell ${cell.status ? phase : 'dead'}`} onClick={() => click(i, j)} />
    )
}

export default Cell