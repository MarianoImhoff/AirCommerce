
import { Container, Navbar, Button } from 'react-bootstrap';

import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../utils/img/Logo.jpg';
import Search from './Search';
import { AuthContext } from '../context/AuthContext';
import { useCartValue } from '../context/CartContext';

const NavBar = () => {
  const { user, toggleAuth } = useContext(AuthContext);
  const userStorage = JSON.parse(localStorage.getItem('user'));
  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [{ cart }] = useCartValue();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post('/users/logout')
      .then(() => {
        axios.put('/orders/save', {
          userNumber: JSON.parse(localStorage.user).id,
          products_buy: cartStorage,
        })
      })
      .then(()=> navigate('/'))
      .then((res) => {
        cart.splice(0, cart.length);
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        toggleAuth(null);
        console.log('LOGOUT DONE');
        
      })
      .catch((err) => console.log('ERROR: ', err));
  };

  return (
    <Navbar bg="dark" expand="md">
      <Container fluid>
        <Link
          style={{
            display: 'flex',
            paddingLeft: '13px',
            textDecoration: 'none',
            alignItems: 'center',
          }}
          to="/"
        >
          <img
            src={logo}
            width="80"
            height="80"
            style={{ borderRadius: '5px' }}
            alt="logo"
          />
          <h1
            style={{
              display: 'flex',
              color: 'white',
              marginLeft: '10px',
              marginTop: '15px',
            }}
          >
            AirCommerce
          </h1>
        </Link>
        <Link to="/Store">
          <Button variant="outline-success">Tienda</Button>
        </Link>

        <Search />

        {user ? (
          <>
            <Button onClick={handleLogout} variant="outline-success">
              Logout
            </Button>
            <Link to={`/account/${user}`}>
              <Button variant="outline-success">{user}</Button>
            </Link>
          </>
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
