import React from "react"
import styles from './Menu.module.css'

export function Porcoes(props) {
    return(
        <>
        <div className={styles.card}><img src={props.url}></img>
        <h4 className={styles.name}>{props.name}</h4>
        <p>{props.price}</p>
        <p><button>Adicionar ao carrinho</button></p>
        </div>
        </>
    )
}
export function Hamburguers(props) {
    return(
        <>
        <div className={styles.card}><img src={props.url}></img>
        <h4 className={styles.name}>{props.name}</h4>
        <p>{props.price}</p>
        <p><button>Adicionar ao carrinho</button></p>
        </div>
        </>
    )
}
export function HotD(props) {
    return(
        <>
        <div className={styles.card}><img src={props.url}></img>
        <h4 className={styles.name}>{props.name}</h4>
        <p>{props.price}</p>
        <p><button>Adicionar ao carrinho</button></p>
        </div>
        </>
    )
}
