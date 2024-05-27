import styles from './Contato.module.css'
import { Link } from 'react-router-dom'

export function Contato() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contatos</h1>
            <Link to="tel:+5532999999999" className={styles.cel}>Telefone: (32) 99999-9999</Link>
            <div className={styles.rSociais}>
                <Link to="#" className={styles.instagram}><i class="fab fa-instagram"></i></Link>
                <Link to="#" className={styles.twitter}><i class="fab fa-twitter"></i></Link>
                <Link to="#" className={styles.facebook}><i class="fab fa-facebook"></i></Link>
                <Link to="#" className={styles.linkedin}><i class="fab fa-linkedin"></i></Link>
                <Link to="#" className={styles.whatsapp}><i class="fab fa-whatsapp"></i></Link>
            </div>
        </div>
    );
}