import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.css';

const Modal = ({ message, id }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <p className="mensaje-modal">{message}</p>

        <Link to={`/pokemon/${id}`}>
        <span className="btn-modal"> Aceptar  </span>
        </Link>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
