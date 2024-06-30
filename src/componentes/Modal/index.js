import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Card from '../CategoriaCard/Card';

function Modal({ onClose }) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Editar Informações</h2>
                <p>Aqui você pode editar as informações.</p>
                <Card>
                    <button onClick={onClose}>Guardar</button>
                </Card>

            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;
