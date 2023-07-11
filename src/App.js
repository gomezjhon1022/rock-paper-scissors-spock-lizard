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
  const [player1IsWinner, setPlayer1IsWinner] =useState("false");
  const [player2IsWinner, setPlayer2IsWinner] =useState("false");
  const [isDraw, setIsDraw] = useState("false");

  useEffect(()=>{
    if (player1!=="") {
      setTimeout(()=>{
        if (player1 === player2) {
          setIsDraw(!isDraw)}
        else if ((player1==="rock-picked"&& player2==="scissors-picked")||(player1==="scissors-picked"&& player2==="paper-picked")||(player1==="paper-picked"&& player2==="rock-picked")||(player1==="paper-picked"&& player2==="spock-picked")||(player1==="spock-picked"&& player2==="scissors-picked")||(player1==="scissors-picked"&& player2==="lizard-picked")||(player1==="lizard-picked"&& player2==="spock-picked")||(player1==="spock-picked"&& player2==="rock-picked")||(player1==="rock-picked"&& player2==="lizard-picked")||(player1==="lizard-picked"&& player2==="paper-picked")) {setPlayer1IsWinner(!player1IsWinner);setScore(score+1)
        }
        else {setPlayer2IsWinner(!player2IsWinner)}
        console.log("se esta ejecutando el settime out ojo con esto")
      }
      ,1000)
    }
  },[player2])

  return (
    <div className="App">
      <Header isOpenModal={isOpenModal} setOpenModal={setOpenModal} score={score} setScore={setScore}>
      </Header>
      <Board isOpenModal={isOpenModal} setOpenModal={setOpenModal} player1={player1} setPlayer1={setPlayer1} player1Chose={player1Chose} setPlayer1Chose={setPlayer1Chose} player2={player2} setPlayer2={setPlayer2} player2Chose={player2Chose} setPlayer2Chose={setPlayer2Chose} player1IsWinner={player1IsWinner} setPlayer1IsWinner={setPlayer1IsWinner} player2IsWinner={player2IsWinner} setPlayer2IsWinner={setPlayer2IsWinner} isDraw={isDraw} setIsDraw={setIsDraw}>
      </Board>
    </div>
  );
}

export default App;
