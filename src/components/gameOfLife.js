import countNeighbors from './countNeighbors'

const gameOfLife = (gameGrid, setGameGrid, gridSize) => {
    const gameGridStatus = gameGrid.gameGridStatus
    const clonedGridStatus = JSON.parse(JSON.stringify(gameGridStatus))
    let flipped = false
    const nextStep = () => {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const totalNeighbors = countNeighbors(gameGridStatus, i, j)
                if (gameGridStatus[i][j].currentStatus) {
                    if (totalNeighbors < 2 || totalNeighbors > 3) {
                        clonedGridStatus[i][j] = { ...clonedGridStatus[i][j], currentStatus: false, lifeCount: 0 }
                        flipped = true
                    } else {
                        clonedGridStatus[i][j] = { ...clonedGridStatus[i][j], lifeCount: clonedGridStatus[i][j].lifeCount + 1 }
                    }

                } else {
                    if (totalNeighbors === 3) {
                        clonedGridStatus[i][j] = { ...clonedGridStatus[i][j], currentStatus: true, lifeCount: 1 }
                        flipped = true
                    }
                }
            }
        }
        return clonedGridStatus
    }
    const newLife = nextStep()
    if (flipped === false) {
        setGameGrid({ ...gameGrid, isRunning: false })
    } else {
        setGameGrid({ ...gameGrid, gameGridStatus: newLife, generation: gameGrid.generation + 1 })
    }
}



export default gameOfLife;