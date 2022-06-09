import React, { useContext } from 'react';
import { Container, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../utils/img/Logo.jpg';
import Search from './Search';

import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { user, toggleAuth } = useContext(AuthContext);

  const handleLogout = () => {
    console.log('TRYING LOGOUT...');
    axios
      .post('/users/logout')
      .then((res) => {
        console.log(res);
        toggleAuth(null);
        console.log('LOGOUT DONE');
      })
      .catch((err) => console.log('ERROR: ', err));
  };

  return (
    <Navbar bg="dark" expand="md">
      <Container fluid>
        <Link style={{ paddingLeft: 13, textDecoration: 'none' }} to="/">
          <img
            src={logo}
            width="80"
            height="80"
            style={{ borderRadius: '5px' }}
            alt="logo"
          />
          <h1>AirCommerce</h1>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Products">
          Tienda
        </Link>

        <NavDropdown title="Filter">
          <NavDropdown.Item href="">Talla</NavDropdown.Item>
          <NavDropdown.Item href="">Marca</NavDropdown.Item>
          <NavDropdown.Item href="">Precio</NavDropdown.Item>
        </NavDropdown>

        <Search />

        {user ? (
          <Button onClick={handleLogout} variant="outline-success">
            Logout
          </Button>
        ) : (
          <Link to="/Login">
            <Button variant="outline-success">Login</Button>
          </Link>
        )}

        <Link to="/Cart">
          <Button variant="outline-success">
            <FaShoppingCart />
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
