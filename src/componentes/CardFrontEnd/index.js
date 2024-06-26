import React from 'react';
import styles from './Card.module.css';

function CardFrontEnd() {
    return (
        <main className={`${styles.containerCard} ${styles.card}`}> {/* Combine container & card styles */}
            <a href="https://www.youtube.com/embed/ypvGqZGJBls">
                <img src="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png" alt="card-capa" />
            </a>
            <div className={styles.icon}> {/* Use consistent class for icon container */}
                <button className="material-symbols-outlined">delete_forever</button>
                <span className={styles.iconText}>Delete</span>
                <button className="material-symbols-outlined">border_color</button>
                <span className={styles.iconText}>Edite</span>
            </div>
            
        </main>
    );
}

export default CardFrontEnd;
