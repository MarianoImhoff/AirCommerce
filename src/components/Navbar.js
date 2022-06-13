<<<<<<< HEAD
=======


>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
import { Container, Navbar, Button } from 'react-bootstrap';

import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../utils/img/Logo.jpg';
import Search from './Search';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { user, toggleAuth } = useContext(AuthContext);
<<<<<<< HEAD
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post('/users/logout')
      .then((res) => {
        localStorage.removeItem('user');
        toggleAuth(null);
        navigate('/');
=======
  console.log(user);
const navigate = useNavigate()
  const handleLogout = () => {
    console.log('TRYING LOGOUT...');
    axios
      .post('/users/logout')
      .then((res) => {
        console.log(res);
        localStorage.removeItem("user")
        toggleAuth(null);
        console.log('LOGOUT DONE');
        navigate("/")
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
      })
      .catch((err) => console.log('ERROR: ', err));
  };

  return (
    <Navbar bg="dark" expand="md">
      <Container fluid>
<<<<<<< HEAD
        <Link
          style={{
            display: 'flex',
            paddingLeft: '13px',
            textDecoration: 'none',
            alignItems: 'center',
          }}
          to="/"
        >
=======
        <Link style={{display:"flex", paddingLeft:"13px", textDecoration:'none',alignItems:"center" }} to="/">
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
          <img
            src={logo}
            width="80"
            height="80"
            style={{ borderRadius: '5px' }}
            alt="logo"
          />
<<<<<<< HEAD
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
          <Button variant="outline-success" >Tienda</Button>
=======
          <h1 style={{display:"flex", color:"white", marginLeft:"10px", marginTop:"15px"}}>AirCommerce</h1>
        </Link>
        <Link  to="/Store">
          <Button variant="outline-success">Tienda</Button>
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
        </Link>

        <Search />

        {user ? (
          <>
<<<<<<< HEAD
            <Button onClick={handleLogout} variant="outline-success">
              Logout
            </Button>
            <Link to={`/account/${user}`}>
              <Button variant="outline-success">{user}</Button>
            </Link>
          </>
        ) : (
=======
          <Button onClick={handleLogout} variant="outline-success">
            Logout
          </Button>
          <Link to= {`/account/${user}`}>
          <Button variant="outline-success">{user}</Button>
        </Link>
        </>
        ) : (  
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
          <Link to="/Login">
            <Button variant="outline-success">Login</Button>
          </Link>
        )}

<<<<<<< HEAD
=======


>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
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
<<<<<<< HEAD
=======

>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
