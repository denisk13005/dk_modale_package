import React from "react"
import FooterModale from "../FooterModale/FooterModale"
import HeaderModale from "../Header/HeaderModale"
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
      <HeaderModale headerMsg={headerMsg} headerStyle={headerStyle} />
      <div className="modalContainer" style={modalContainerStyle}>
        <p style={modalMessageStyle}>{modalMessage}</p>
        <button
          id="closeModal"
          onClick={() => toggleModal()}
          style={closeBtnStyle}
        ></button>
      </div>
      <FooterModale footerMsg={footerMsg} footerStyle={footerStyle} />
    </div>
  )
}
