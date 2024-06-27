import styles from './CardFront.module.css';

function CardFront({ imagem, categoria, link }) {
    return (
        <>
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
                            <p>Editar</p>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </>
    );
}

export default CardFront;