import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ onClose }) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Editar Informações</h2>
                <p>Aqui você pode editar as informações.</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;
