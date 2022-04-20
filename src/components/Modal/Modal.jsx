import React from 'react';

export const Modal = (props) => {
  let { status, message, toggleModal } = props


  return (
    <div className={status ? "openModal" : "closeModal"}>
      <div className="modalContainer">
        <p>{message}</p>
        <button onClick={() => toggleModal()}>X</button>
      </div>
    </div>
  )
};

