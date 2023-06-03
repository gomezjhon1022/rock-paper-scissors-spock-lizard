import "./Header.css";
import {Modal} from "./Modal";
import React from 'react';

function Header ({isOpenModal, setOpenModal, score}){


  return (
    <>
      {!isOpenModal &&(<div className="header__container">
        <div className="header">
          <div className="header-left">
          ROCK<br/> PAPER<br/>  SCISSORS<br/>  LIZARD <br/> SPOCK<br/>
          </div>
          <div className="header-right">
            SCORE <br/>
            <div className="header-right-score">{score}</div>
          </div>
        </div>
        </div>
        )
      }

      {isOpenModal && <Modal setOpenModal={setOpenModal} isOpenModal={isOpenModal}>

      </Modal>}
    </>
  )
}

export default Header
