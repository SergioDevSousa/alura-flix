import React from 'react';
import styles from './CardBanner.module.css';
import ImagemMain from '../ImagemMain';
import TextoMain from '../TextoMain';


function CardBanner() {
    return (
        <section className={styles.containerMain}>
            <TextoMain />
            <ImagemMain className={styles.imagemMain} />
        </section>
    );
}

export default CardBanner;

