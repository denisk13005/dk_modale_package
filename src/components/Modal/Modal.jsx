import React from "react"
import "./modal.css"

export const Modal = (props) => {
  let {
    status,
    backgroundModalContainerStyle,
    modalContainerStyle,
    modalMessageStyle,
    modalMessage,
    toggleModal,
    closeBtnStyle,
    headerStyle,
    headerMsg,
    footerStyle,
    footerMsg,
  } = props

  return (
    <div
      className={status ? "openModal" : "closeModal"}
      style={backgroundModalContainerStyle}
    >
      <div className="headerModal" style={headerStyle}>
        <h1>{headerMsg}</h1>
      </div>
      <div className="modalContainer" style={modalContainerStyle}>
        <p style={modalMessageStyle}>{modalMessage}</p>
        <button
          id="closeModal"
          onClick={() => toggleModal()}
          style={closeBtnStyle}
        ></button>
      </div>
      <div className="footerModale" style={footerStyle}>
        <h1>{footerMsg}</h1>
      </div>
    </div>
  )
}
