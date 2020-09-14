import React from 'react';
import PropTypes from 'prop-types';
import {mOverlay, modal, modalTitle, modalBody, modalFooter, modalBtn } from './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if(isOpen) {
        return (<div className={`${mOverlay}`}>
                    <div className={`${modal}`}>{children}
                        <button className={`${modalBtn}`} onClick={onClose}>Cancel</button>
                    </div>
               </div>
           );
    }else {
        return '';
    }
};

Modal.Title = ({ children }) => <div className={ modalTitle }>{children}</div>;
Modal.Body = ({ children }) => <div className={ modalBody }>{children}</div>;
Modal.Footer = ({ children }) => <div className={ modalFooter }>{children}</div>;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

Modal.defaultProps = {
    isOpen: false
};

export default Modal;
