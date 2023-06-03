import "./Modal.css"


function Modal ({setOpenModal, isOpenModal}) {
  return (
        <div className="ModalContainer">
          <div className="ModalCard">
              <div className="ModalCard--title">
                <h3 className="Title">RULES</h3>
                <button className="ModalButton" onClick={() => setOpenModal(!isOpenModal)}></button>
              </div>
              <div className="ModalBackground">
              </div>
          </div>
        </div>
  )

}

export {Modal};