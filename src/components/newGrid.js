const gridSize = 25

const newGrid = (cellStatus = () => {
    const cell = {
        currentStatus: Math.random() < 0.2,
        lifeCount: 0
    }
    if (cell.currentStatus) { cell.lifeCount = 1 }
    return cell
}) => {
    const grid = []
    for (let i = 0; i < gridSize; i++) {
        grid[i] = []
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = cellStatus()
        }
    }
    return grid
}


export default newGrid;