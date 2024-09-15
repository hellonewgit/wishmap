import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, onClose }) => {
    return (
        <div className={styles['modal']}>

            <div className={styles['modal__content']}>
                <h2 className={styles.modal__heading}>Добро пожаловать в мир ваших желаний!</h2>
                <button onClick={onClose} className={styles['modal__close-button']}>
                    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs />
                        <path id="Vector 47" d="M18.7 6.7L6.7 18.7L5.29 17.29L17.29 5.29L18.7 6.7ZM17.29 5.32L17.29 5.29C17.68 4.89 18.31 4.89 18.7 5.29C19.1 5.68 19.1 6.31 18.7 6.7L18.67 6.7L17.29 5.32ZM6.7 18.67L6.7 18.7C6.31 19.1 5.68 19.1 5.29 18.7C4.89 18.31 4.89 17.68 5.29 17.29L5.32 17.29L6.7 18.67Z" fill="#1F222E" fill-opacity="1.000000" fill-rule="evenodd" />
                        <path id="Vector 48" d="M5.29 6.7L17.29 18.7L18.7 17.29L6.7 5.29L5.29 6.7ZM6.7 5.32L6.7 5.29C6.31 4.89 5.68 4.89 5.29 5.29C4.89 5.68 4.89 6.31 5.29 6.7L5.32 6.7L6.7 5.32ZM17.29 18.67L17.29 18.7C17.68 19.1 18.31 19.1 18.7 18.7C19.1 18.31 19.1 17.68 18.7 17.29L18.67 17.29L17.29 18.67Z" fill="#1F222E" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>

                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
