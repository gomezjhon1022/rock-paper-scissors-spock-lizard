import "./Header.css";
import {Modal} from "./Modal";
import {useState} from 'react';

function Header (){

  const [isOpenModal, setOpenModal] = useState("true");
  return (
    <div className="header">
      {!isOpenModal && (<><div className="header-left">
        ROCK PAPER SCISSORS LIZARD SPOCK
      </div><div className="header-right">
          SCORE 13
        </div></>)}
      {isOpenModal && <Modal>

      </Modal>}
    </div>
  )
}

export default Header


// {isOpenModal && (<div className="header-left">
// ROCK PAPER SCISSORS LIZARD SPOCK
// </div>
// <div className="header-right">
// SCORE 13
// </div>)}