import CardMain from '../CardMain';
import styles from './Banner.module.css';

function Banner() {
    return (
            <>
            <div className={styles.banner}>
                <img src="/imagens/player.png" alt="banner-img" />
            </div>
            <CardMain />
            </>
    );
}

export default Banner;
