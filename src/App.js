import React, { useState } from 'react';
import './App.css';
import newGrid from './components/newGrid'
import Grid from './components/grid'
import gameOfLife from './components/gameOfLife'
import timeLine from './components/timeLine'
import SpeedAdjust from './components/speedAdjust'
import Popup from 'reactjs-popup'
const gridSize = 28


function App() {
  const [gameGrid, setGameGrid] = useState({
    gameGridStatus: newGrid(),
    generation: 0,
    isRunning: false,
    rate: 100
  })
  function random(e) {
    e.preventDefault()
    setGameGrid({ ...gameGrid, gameGridStatus: newGrid(), isRunning: false, generation: 0 })
  }
  function changeRate(newRate) {
    setGameGrid({ ...gameGrid, rate: newRate })
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
  timeLine(() => {
    gameOfLife(gameGrid, setGameGrid, gridSize)
  }, gameGrid.isRunning ? gameGrid.rate : null)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Of Life</h1>
        <div id='controls'>
          <Popup trigger={<button className="button"> Rules </button>} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                 </a>
                <div className="header"> Rules to Conway's Game Of Life </div>
                <div className="content">
                  <p>If a living cell has fewer than two neighbors it dies</p>
                  <p>If a living cell has more than three neighbors it dies</p>
                  <p>If a living cell has two or three neighbors it lives</p>
                  <p>If a dead cell has three neighbors it lives</p>
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    Close
            </button>
                </div>
              </div>
            )}
          </Popup>

          <button onClick={random}>Random Grid</button>
          <button onClick={togglePause}>{gameGrid.isRunning ? 'Pause' : 'Start'}</button>
          <button onClick={clearGrid}>Clear Grid</button>
          <div id='speedAdjust'>
            <SpeedAdjust rate={gameGrid.rate} onSpeedChange={changeRate} />
            <h2>{'Faster <-------> Slower'}</h2>
          </div>
        </div>
        <h3>Generation: {gameGrid.generation}</h3>
        <Grid gameGrid={gameGrid} setGameGrid={setGameGrid} gridSize={gridSize} />
      </header>
    </div>
  );
}

export default App;
