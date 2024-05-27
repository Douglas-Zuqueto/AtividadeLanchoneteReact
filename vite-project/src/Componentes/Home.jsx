import styles from './Home.module.css'

export function Home(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.start}</h1>
      <h2 className={styles.message}>{props.message}</h2>
    </div>
  )
}