import styles from './Rodape.module.css';
import LogoImagem from '../LogoImagem';

function Rodape({logoRodape, alt}) {
    return (
        <footer className={styles.rodape}>
            <LogoImagem logo={logoRodape} alt={alt}/>
        </footer>
    );
}



export default Rodape;
