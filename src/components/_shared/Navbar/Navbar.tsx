import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { urls } from 'routes/urls';

import styles from './Navbar.module.scss';

const CustomNavbar = (): JSX.Element => (
  <div className={styles.container}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to={urls.home}>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Options" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to={urls.products}>Products</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={urls.categories}>Categories</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={urls.foodMart}>Food Marts</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={urls.manufacturer}>Manufacturer</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default CustomNavbar;
