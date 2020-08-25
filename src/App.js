import React, { useState } from 'react';
import './App.css';
import newGrid from './components/newGrid'
import Grid from './components/grid'
import gameOfLife from './components/gameOfLife'

const gridSize = 25


function App() {
  const [gameGrid, setGameGrid] = useState({
    gameGridStatus: newGrid(),
    generation: 0,
    isRunning: false,
    rate: 100
  })

  function newGame(e) {
    e.preventDefault()
    setGameGrid({ ...gameGrid, gameGridStatus: newGrid(), isRunning: false, generation: 0 })
  }

  function togglePause(e) {
    e.preventDefault()
    setGameGrid({ ...gameGrid, isRunning: !gameGrid.isRunning })
  }

  function clearGrid(e) {
    e.preventDefault()
    setGameGrid({
      ...gameGrid, gameGridStatus: newGrid(() => {
        const cell = {
          currentStatus: false,
          lifeCount: 0
        }
        return cell
      }), isRunning: false, generation: 0
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Game Of Life</div>
        <button onClick={newGame}>New Game</button>
        <button onClick={togglePause}>{gameGrid.isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={clearGrid}>Clear Grid</button>
        <Grid gameGrid={gameGrid} setGameGrid={setGameGrid} gridSize={gridSize} />
      </header>
    </div>
  );
}

export default App;
