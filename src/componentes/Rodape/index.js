import styles from './Rodape.module.css';
import LogoImagem from '../LogoImagem';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <LogoImagem logo={LogoImagem} />
        </footer>
    );
}



export default Rodape;
