const countNeighbors = (arr, row, col) => {
    const count = (num) => {
        if (num < 0) {
            return (arr.length - 1)
        }
        else if (num > arr.length - 1) {
            return 0
        }
        else {
            return num
        }
    }
    const neighbors = [
        arr[count((row - 1))][count((col - 1))],
        arr[count((row - 1))][col],
        arr[count((row - 1))][count((col + 1))],
        arr[count(row)][count((col - 1))],
        arr[count((row))][count((col + 1))],
        arr[count((row + 1))][count((col - 1))],
        arr[count((row + 1))][col],
        arr[count((row + 1))][count((col + 1))]
    ]

    let counter = 0
    neighbors.forEach(x => {
        if (x.status) {
            counter++
        }
    })
    return counter
}

export default countNeighbors;