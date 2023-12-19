import { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./pages/GameBoard";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {

  const [playerChoice, setPlayerChoice] = useState('O')

  console.log(playerChoice)
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Menu currentPlayer={playerChoice} setPlayerHandler={setPlayerChoice}/>}/>
      <Route exact path="/gameboard" element={<GameBoard />}/>
      </Routes>
    </Router>
    // <Menu/>
  );
}

export default App;
