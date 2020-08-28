import React, { useState } from 'react';
import './App.css';
import randomGrid from './components/randomGrid'
import Grid from './components/grid'
import gameOfLife from './components/gameOfLife'
import timeLine from './components/timeLine'
import SpeedAdjust from './components/speedAdjust'
import Popup from 'reactjs-popup'
const gridSize = 28


function App() {
  const [gameGrid, setGameGrid] = useState({
    gameGridStatus: randomGrid(),
    generation: 0,
    isRunning: false,
    rate: 10
  })
  function random(e) {
    e.preventDefault()
    setGameGrid({ ...gameGrid, gameGridStatus: randomGrid(), isRunning: false, generation: 0 })
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
      ...gameGrid, gameGridStatus: randomGrid(() => {
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
          <Popup trigger={<button className="button"> About </button>} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                 </a>
                <div className="header"> About Conway's Game Of Life </div>
                <div className="about-content">
                  <p>The Game of Life (sometimes known simply as Life) is an example of a cellular automaton and a zero-player game. It takes place on an infinite two-dimensional grid in which cells can be ‘on’ (alive) or ‘off’ (dead), and is defined by a set of rules that jointly determine the state of a cell given the state of its neighbours. Following specification of an initial configuration, patterns evolve over time across the grid requiring no further user input (thus ‘zero-player’). First popularized in 1970 in the Scientific American (Gardner, 1970), the Game of Life has attracted lasting appeal among both scientific and amateur communities. One reason for its appeal is that it is very simple to program, yet at the same time it appears to exemplify emergent and self-organized behaviour. Even though its (simple) rules are specified at the level of individual cells, one sees entities at coarse-grained ‘higher’ levels of description, whose behaviors are better described by rules at these higher levels.
                  </p>
                  <p>Via Scholarpedia.org</p>
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
          <Popup trigger={<button className="button"> Colors </button>} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                 </a>
                <div className="header"> Colors of Game of Life </div>
                <div className="color-content">
                  <p>The different colors represent the ammout of 'days/iterations' a cell has been alive</p>
                  <p>Dead Cell: black</p>
                  <p>Day 1: Purple</p>
                  <p>Day 2: Yellow</p>
                  <p>Day 3: Red</p>
                  <p>Day 4: Light Green</p>
                  <p>Day 5: Orange</p>
                  <p>Day 6: Pink</p>
                  <p>Day 7: Light Salmon</p>
                  <p>Day 8: Lime Green</p>
                  <p>Day 9: Sea Green</p>
                  <p>Day 10: Sky Blue</p>
                  <p>More Than 10 Days: Silver</p>
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
