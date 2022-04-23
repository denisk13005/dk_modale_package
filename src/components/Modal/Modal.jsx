import React from 'react';
import FooterModale from '../FooterModale/FooterModale';
import HeaderModale from '../Header/HeaderModale';
import './modal.css'

export const Modal = (props) => {
  let { status, message, toggleModal,backgroundBtnClose,backgroundContainer } = props
  
  return (
    <div className={status ? "openModal" : "closeModal"} style={{background: backgroundContainer}}>
      <HeaderModale/>
      <div className="modalContainer">
        <p>{message}</p>
        <button id='closeModal' onClick={() => toggleModal() } style={{background : backgroundBtnClose}}> </button>
      </div>
      <FooterModale/>
    </div>
  )
};

