import "./Board.css"
import React from "react";

function Board({isOpenModal, setOpenModal, setPlayer1, player1, setPlayer1Chose, player1Chose}) {
  console.log(player1, "esto se elige")
  return (
  <>
    {!isOpenModal &&player1Chose&&(<>
      <div className="board_container">
        <div className="board">
          <button className="scissors circle" onClick={()=> {setPlayer1("scissors-picked");setPlayer1Chose(!player1Chose)}}></button>
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
            <div className="circle_picked_random"></div>
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