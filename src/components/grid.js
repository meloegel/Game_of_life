import React from 'react';
import Cell from './cell'


const Grid = ({ gameGrid, setGameGrid, gridSize }) => {
    function handleChange(x, y) {
        if (gameGrid.isRunning || gameGrid.generation > 0) {
            return
        }
        const toggleGridStatus = () => {
            const clonedGrid = JSON.parse(JSON.stringify(gameGrid.gameGridStatus))
            clonedGrid[x][y].currentStatus = !clonedGrid[x][y].currentStatus;
            return clonedGrid
        }
        setGameGrid({ ...gameGrid, gameGridStatus: toggleGridStatus() })
    }

    const grid = []
    for (let i = 0; i < gridSize; i++) {
        let row = []
        for (let j = 0; j < gridSize; j++) {
            row.push(
                <Cell key={`c${i}${j}`} cell={gameGrid.gameGridStatus[i][j]} flip={handleChange} i={i} j={j} />
            )
        }
        grid.push(<div key={`r${i}`} className='row'>{row}</div>)
    }
    return <div className='grid'>{grid}</div>

}

export default Grid;
