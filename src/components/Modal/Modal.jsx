import React from 'react';
import FooterModale from '../FooterModale/FooterModale';
import HeaderModale from '../Header/HeaderModale';
import './modal.css'

export const Modal = (props) => {
  let { status, message, toggleModal } = props
  
  return (
    <div className={status ? "openModal" : "closeModal"}>
      <HeaderModale/>
      <div className="modalContainer">
        <p>{message}</p>
        <button onClick={() => toggleModal()}>X</button>
      </div>
      <FooterModale/>
    </div>
  )
};

