import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { menuPorcao, menuHamburguer , menuHotD , responsive } from './dataMenu.js';
import {Hamburguers, HotD, Porcoes} from './Menu.jsx'
import styles from './AppMenu.module.css'

export function AppMenu(){

  const porcao = menuPorcao.map((item) =><Porcoes name={item.name} url={item.imageurl} price={item.price} />);
  const hambuguer = menuHamburguer.map((item) =><Hamburguers name={item.name} url={item.imageurl} price={item.price} />);
  const hotdog = menuHotD.map((item) =><HotD name={item.name} url={item.imageurl} price={item.price} />);

    return (
        <div className="App">
            <h1 className={styles.title}>Menu</h1>
            <h2 className={styles.titleSection}>Hambúrguers</h2>
            <Carousel responsive={responsive}>
              {hambuguer}
            </Carousel>
            <h2 className={styles.titleSection}>Hot Dogs</h2>
            <Carousel responsive={responsive}>
              {hotdog}
            </Carousel>
            <h2 className={styles.titleSection}>Porções</h2>
            <Carousel responsive={responsive}>
              {porcao}
            </Carousel>
        </div>
    )
}