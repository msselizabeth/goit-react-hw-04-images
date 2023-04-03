import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContainer } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClose, children}) => {

      useEffect(() => {
        const onKeyClose = (e) => e.code === 'Escape' && onClose();
        window.addEventListener('keydown', onKeyClose)
    
        return () => {
            window.removeEventListener('keydown', onKeyClose)
        }
      }, [onClose]);

    const onCloseBackdrop = (evt) => {
        if (evt.currentTarget === evt.target) {
            onClose();
        }
    }


    return (
            createPortal(
            <Backdrop onClick={onCloseBackdrop}>
                <ModalContainer>{children}</ModalContainer>
            </Backdrop> , modalRoot
        )
        )
    

}

Modal.propTypes = {
    children: PropTypes.object,
};