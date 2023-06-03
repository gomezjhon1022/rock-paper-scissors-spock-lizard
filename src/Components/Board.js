import "./Board.css"
import React from "react";

function Board({isOpenModal, setOpenModal, setPlayer1}) {
  return (
  <>
    {!isOpenModal &&(<>
      <div className="board_container">
        <div className="board">
          <button className="scissors circle" onClick={()=> setPlayer1("scissors")}></button>
          <button className="spock circle" onClick={()=> setPlayer1("spock")}></button>
          <button className="paper circle" onClick={()=> setPlayer1("paper")}></button>
          <button className="lizard circle" onClick={()=> setPlayer1("lizard")}></button>
          <button className="rock circle" onClick={()=> setPlayer1("rock")}></button>
        </div>
      </div>
      <button className="rules" onClick={()=> setOpenModal(!isOpenModal)} >
        <p>RULES</p>
      </button>
      </>
    )}
  </>
)}

export default Board;