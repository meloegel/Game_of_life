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
        <h1>Conway's Game Of Life</h1>
        <h2>Created By: Mark Loegel</h2>
        <div id='controls'>
          <Popup trigger={<button className="button"> Rules </button>} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                 </a>
                <div className="rulesTitle"> Rules to Conway's Game Of Life </div>
                <div className="rulesContent">
                  <p className='rulesP'>If a living cell has fewer than two neighbors it dies</p>
                  <p className='rulesP'>If a living cell has more than three neighbors it dies</p>
                  <p className='rulesP'>If a living cell has two or three neighbors it lives</p>
                  <p className='rulesP'>If a dead cell has three neighbors it lives</p>
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
                <div className="colorsTitle"> Colors of Game of Life </div>
                <div className="color-content">
                  <p id='colorDescription'>The different colors represent the ammout of 'days' or 'iterations' a cell has been alive</p>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Day's Alive</th>
                      <th>Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dead Cell</td>
                      <td id='black'>Black</td>
                    </tr>
                    <tr>
                      <td>Day 1:</td>
                      <td id='purple'>Purple</td>
                    </tr>
                    <tr>
                      <td>Day 2:</td>
                      <td id='yellow'>Yellow</td>
                    </tr>
                    <tr>
                      <td>Day 3:</td>
                      <td id='red'>Red</td>
                    </tr>
                    <tr>
                      <td>Day 4:</td>
                      <td id='lightGreen'>Light Green</td>
                    </tr>
                    <tr>
                      <td>Day 5:</td>
                      <td id='orange'>Orange</td>
                    </tr>
                    <tr>
                      <td>Day 6:</td>
                      <td id='pink'>Pink</td>
                    </tr>
                    <tr>
                      <td>Day 7:</td>
                      <td id='lightSalmon'>Light Salmon</td>
                    </tr>
                    <tr>
                      <td>Day 8:</td>
                      <td id='limeGreen'>Lime Green</td>
                    </tr>
                    <tr>
                      <td>Day 9:</td>
                      <td id='seaGreen'>Sea Green</td>
                    </tr>
                    <tr>
                      <td>Day 10:</td>
                      <td id='skyBlue'>Sky Blue</td>
                    </tr>
                    <tr>
                      <td>More Than 10 Days:</td>
                      <td id='silver'>Silver</td>
                    </tr>
                  </tbody>
                </table>
                <div className="actions">
                  <button
                    className="button"
                    id='closeButton'
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
      <footer>
        <div className="contact">
          <p>Created By: <span>Mark Loegel</span></p>
          <p>Email: <span>Meloegel@gmail.com</span></p>
          <p>Porfolio: <a href='#https://www.MarkLoegelsPortfolio.com/'> <span>https://www.MarkLoegelsPortfolio.com/ </span></a></p>
          <p>LinkedIn: <a href='https://www.linkedin.com/in/mark-loegel-a43526b6/'><span>https://www.linkedin.com/in/mark-loegel-a43526b6/</span></a></p>
          <p>Github: <a href='https://github.com/meloegel'><span>https://github.com/meloegel</span></a></p>
          <p>Sourcerer.io: <a href='https://sourcerer.io/meloegel'><span>https://sourcerer.io/meloegel</span></a></p>
          <p>Location: <span> Madison Heights, Mi</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
