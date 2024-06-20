import React from 'react';
import styles from './Cabecalho.module.css';
import LogoImagem from '../LogoImagem';

function Cabecalho({logoCabecalho, alt}) {
    return (
        <>
            <header className={styles.cabecalho}>
                <LogoImagem logo={logoCabecalho} alt={alt}/>
                <nav className={styles.container}>
                    <a href="/" className={styles.home}>Home</a>
                    <a href="/novovideo" className={styles.novoVideo}>Novo Vídeo</a>
                </nav>
            </header>
        </>
    );
}

export default Cabecalho;

