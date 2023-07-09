import "./Board.css"
import React from "react";

function Board({isOpenModal, setOpenModal, setPlayer1, player1, setPlayer1Chose, player1Chose, player2, setPlayer2, player2Chose, setPlayer2Chose}) {
  function pickedRandom () {
    const randomNumber = Math.floor(Math.random()*5);
    switch (randomNumber) {
      case 0:
        setPlayer2("scissors-picked");
        setPlayer2Chose(!player2Chose);
        break;
      case 1:
        setPlayer2("spock-picked");
        setPlayer2Chose(!player2Chose);
        break;
      case 2:
        setPlayer2("paper-picked");
        setPlayer2Chose(!player2Chose);
        break;
      case 3:
        setPlayer2("lizard-picked");
        setPlayer2Chose(!player2Chose);
        break;
      default:
        setPlayer2("rock-picked");
        setPlayer2Chose(!player2Chose);
    }
  }

  return (
  <>
    {!isOpenModal &&player1Chose&&(<>
      <div className="board_container">
        <div className="board">
          <button className="scissors circle" onClick={()=> {setPlayer1("scissors-picked");setPlayer1Chose(!player1Chose);setTimeout (pickedRandom,2000)}}></button>
          <button className="spock circle" onClick={()=> {setPlayer1("spock-picked");setPlayer1Chose(!player1Chose)}}></button>
          <button className="paper circle" onClick={()=> {setPlayer1("paper-picked");setPlayer1Chose(!player1Chose)}}></button>
          <button className="lizard circle" onClick={()=> {setPlayer1("lizard-picked");setPlayer1Chose(!player1Chose)}}></button>
          <button className="rock circle" onClick={()=> {setPlayer1("rock-picked");setPlayer1Chose(!player1Chose)}}></button>
        </div>
      </div>
      </>
    )}
    {!player1Chose&&(
      <div className="board_container">
        <div className="board_election">
          <div className="title_election_container">
            <div className="title_election">YOU PICKED</div>
            <div className="title_election">THE HOUSE PICKED</div>
          </div>
          <div className="options_container">
            <div className={`circle-picked ${player1}`}></div>
            {player2Chose&&<div className={`circle_picked_random ${player2}`}></div>}
            {!player2Chose&&<div className={`circle_picked_random_chose ${player2}`}></div>}
          </div>
        </div>
      </div>
    )

    }


    {!isOpenModal&&(
      <button className="rules" onClick={()=> setOpenModal(!isOpenModal)} >
        <p>RULES</p>
      </button>
    )}
  </>
)}

export default Board;