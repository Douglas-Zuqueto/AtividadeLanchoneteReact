import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container className={styles.navContainer}>
        <Link to='/'  className={styles.navbarBrand} ><Navbar.Brand href="/"><i className="fa-solid fa-burger"></i></Navbar.Brand></Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav}>
            <Link to='/'><Nav.Link href="/">Home </Nav.Link></Link>
            <Link to='/Sobre'><Nav.Link href="/Sobre">Sobre </Nav.Link></Link>
            <Link to='/Menu'><Nav.Link href="/Menu">Menu </Nav.Link></Link>
            <Link to='/Contato'><Nav.Link href="/Contato">Contato</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}