import React from 'react';
import styles from './CardMain.module.css';
import ImagemMain from '../ImagemMain';
import TextoMain from '../TextoMain';


function CardMain() {
    return (
        <section className={styles.containerMain}>
            <TextoMain />
            <ImagemMain />
        </section>
    );
}

export default CardMain;

