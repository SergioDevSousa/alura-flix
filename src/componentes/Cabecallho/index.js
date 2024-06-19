import React from 'react';
import styles from './Cabecalho.module.css';
import logo from './LogoMain.png';

function Cabecalho() {
    return (
        <>
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo" />

        <div className={styles.container}>
            <a href="/" className="home">Home</a>
            <a href="/novovideo" className="novoVideo">Novo Vídeo</a>
        </div>
        </header>
        </>
    );
}

export default Cabecalho;

