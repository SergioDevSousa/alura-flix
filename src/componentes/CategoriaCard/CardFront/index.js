import React, { useState } from 'react';
import styles from './CardFront.module.css';
import Modal from '../../Modal';

function CardFront({ imagem, categoria, link }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className={styles.containerMain}>
                <figure className={styles.card}>
                    <a href={link}><img src={imagem} alt={categoria} /></a>

                    <figcaption className={styles.caption}>
                        <div className={styles.titulo}></div>
                        <div className={styles.icons}>
                            <div className={styles.delete}>
                                <img src="/imagens/VectorDel.png" alt="Deletar" />
                                <p>Deletar</p>
                            </div>
                            <div className={styles.edit}>
                                <img src="/imagens/VetorEditar.png" alt="Editar" />
                                <p onClick={openModal}>Editar</p>
                                {isModalOpen && <Modal onClose={closeModal} />}
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </section>

        </>
    );
}

export default CardFront;