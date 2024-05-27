import styles from './Sobre.module.css'

export function Sobre(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.message}>{props.message}</p>
        </div>
    );
}