import React from 'react';
import classes from './Modal.module.css'

const Modal = (props) => {
    return (
        <div className={[classes.modal, props.modalOpened ? classes.active : ''].join(' ')} onClick={() => props.setModalOpened(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
