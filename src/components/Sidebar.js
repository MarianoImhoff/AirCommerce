import React from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Container, Navbar, NavDropdown, Offcanvas, Nav} from 'react-bootstrap';

const Sidebar = ()=> {

<>
  {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">AirCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Account
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="#">My Current Order</Link>
              <Link href="#">My Orders</Link>
              <Link href="#">My Profile</Link>
              <NavDropdown title="Filter" >
                        <NavDropdown.Item href="">Talla</NavDropdown.Item>
                        <NavDropdown.Item href="">Marca</NavDropdown.Item>
                        <NavDropdown.Item href="">Precio</NavDropdown.Item>
                    </NavDropdown>
            </Nav>
            <Link href="#">Create new product</Link>
            <Link href="#">Update product</Link>
            <Link href="#">Manage users</Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
=======

import { Link } from 'react-router-dom';

import * as FaIcons from "react-icons/fa"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import s from "../styles/Sidebar.module.css"
const Sidebar = () => {

  const { user } = useContext(AuthContext)
  
  const userStorage = JSON.parse(localStorage.getItem("user"));
  
  return (
    <>
      <div className={s.sidebarContainer}>

        <div className={s.sidebar}>
          <ul className={s.list}>
            <li>
              <Link  to="/account">
                <FaIcons.FaShoppingBag />My Current Order
              </Link>
            </li>

            <li >
              <Link to="/history">
                <FaIcons.FaBoxOpen /> My Orders
              </Link>
            </li>

            <li>
              <Link to="/profile">
                <FaIcons.FaUser />My Profile
              </Link>
            </li>

          </ul>

          {
            userStorage.isAdmin ? (

              <div>
                <ul>
                  <li>
                    <Link to="/new_product">
                    <FaIcons.FaStoreAlt/>  Create new product
                    </Link>
                  </li>
                  <li >
                    <Link to="/update_product">
                    <FaIcons.FaStore/> Update product
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null
          }

          {
            userStorage.superAdmin ? (

              <div>
                <ul>
                  <li>

                <Link to="/users">
                <FaIcons.FaUserTie/> Manage users
                </Link>
                  </li>
                </ul>
              </div>
            ) : null
          }
        </div>
      </div>
    </>
  );

>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
}

export default Sidebar