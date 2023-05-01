import "./Board.css"

function Board() {
  return (
  <>
    <div className="board_container">

      <div className="board">
      <div className="scissors circle"></div>
        <div className="spock circle"></div>
        <div className="paper circle"></div>
        <div className="lizard circle"></div>
        <div className="rock circle"></div>
      </div>
    </div>
    <div className="rules">
      <p>RULES</p>
    </div>
  </>
)}

export default Board;