import "./Modal.css"


function Modal ({setOpenModal, isOpenModal}) {
  return (
    <div className="ModalContainer">
      <h3 className="Title">RULES</h3>
      <div className="ModalBackground">
      </div>
      <button className="ModalButton" onClick={() => setOpenModal(!isOpenModal)}></button>
    </div>
  )

}

export {Modal};