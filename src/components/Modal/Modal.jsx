import React from "react"
const PropTypes = require("prop-types")
import "./modal.css"
/**
 *
 * @param {boolean} status true if modal is open
 * @param {object}  backgroundModalContainerStyle style for modal background container
 * @param {object} modalContainerStyle style for modal container
 * @param {object} modalMessageStyle style for modal message
 * @param {string} modalMessage modal message
 * @param {func} toggleModale function for close the modal in this component
 * @param {object} closeBtnStyle style for close btn
 * @param {object} headerStyle header style
 * @param {string} headerMsg header message
 * @param {object} footerStyle footer style
 * @param {string} footerMsg footer message
 *
 * @returns
 */
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

Modal.propTypes = {
  status: PropTypes.bool.isRequired,
  backgroundModalContainerStyle: PropTypes.object,
  modalContainerStyle: PropTypes.object,
  modalMessageStyle: PropTypes.object,
  modalMessage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  closeBtnStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  headerMsg: PropTypes.string,
  footerStyle: PropTypes.object,
  footerMsg: PropTypes.string,
}
