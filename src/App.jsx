import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

import logoIcon from './assets/logo.svg'
import xIcon from './assets/icon-x-outline.svg'
import oIcon from './assets/icon-o.svg'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS = {
  'X': 'player 1',
  'O': 'player 2'
}

const initialPage = <div className='container main-menu__container'>
  <div className="symbols-container">
    <img src={logoIcon} alt="Logo Icon" />
  </div>
  <div className="choose-player__container">
    <h4>pick player 1's mark</h4>
    <div className="choose-player__switch">
      <div className="player-x">
        <img src={xIcon} alt="" />
      </div>
      <div className="player-o">
        <img src={oIcon} alt="" />
      </div>
    </div>
    <p>Remember: X goes first</p>
  </div>
  <div className="button-container">
  <button className="btn btn-yellow">
    new game (VS Cpu)
  </button>
  <button className="btn btn-blue">
    new game (vs player)
  </button>
  </div>
</div>

function App() {
 console.log(initialGameBoard)
initialGameBoard.map(box => (
  console.log(box)
))
  return (
    <>
    {initialPage}
     <GameBoard></GameBoard>
    </>
  )
}

export default App
