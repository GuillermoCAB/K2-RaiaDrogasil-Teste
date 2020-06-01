import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)'
  }
};

function ModalWindow({modalIsOpen, closeModal, content}) {
    return  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
  >
      {content}
  </Modal>;
}

export default ModalWindow;