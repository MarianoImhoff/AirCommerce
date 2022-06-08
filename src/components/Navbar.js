import React from 'react';
import { Container, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../utils/img/Logo.jpg";
import Search from './Search';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="md">
            <Container fluid>
                    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/">
                        <img
                            src={logo}
                            width="80"
                            height="80"
                            style={{'borderRadius':'5px'}}
                            alt="logo"
                        /> 
                        <h1>AirCommerce</h1>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/Products">Tienda</Link>

                    <NavDropdown title="Filter" >
                        <NavDropdown.Item href="">Talla</NavDropdown.Item>
                        <NavDropdown.Item href="">Marca</NavDropdown.Item>
                        <NavDropdown.Item href="">Precio</NavDropdown.Item>
                    </NavDropdown>

                    <Search />

                    <Link to="/Login">
                        <Button variant="outline-success">Login</Button>
                    </Link>
                    <Link to="/Cart">
                        <Button variant="outline-success"><FaShoppingCart /></Button>
                    </Link>
               
            </Container>
        </Navbar>
    )
}

export default NavBar
