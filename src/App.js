import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import { useState, useEffect } from 'react'

function App() {
  const [isOpenModal, setOpenModal] = useState("true");
  const [score, setScore] =useState(0);
  const [player1, setPlayer1] =useState("");
  const [player1Chose, setPlayer1Chose]= useState("false");
  const [player2, setPlayer2]= useState("");
  const [player2Chose, setPlayer2Chose]= useState("false");

  useEffect(() => console.log("se actualiza open modal"), [isOpenModal, player1]);
  console.log(player1);
  console.log(player2);

  return (
    <div className="App">
      <Header isOpenModal={isOpenModal} setOpenModal={setOpenModal} score={score} setScore={setScore}>
      </Header>
      <Board isOpenModal={isOpenModal} setOpenModal={setOpenModal} player1={player1} setPlayer1={setPlayer1} player1Chose={player1Chose} setPlayer1Chose={setPlayer1Chose} player2={player2} setPlayer2={setPlayer2} player2Chose={player2Chose} setPlayer2Chose={setPlayer2Chose}>
      </Board>
    </div>
  );
}

export default App;
