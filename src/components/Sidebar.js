import React from "react";
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
}

export default Sidebar