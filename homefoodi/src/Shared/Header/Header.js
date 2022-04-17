import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Home Foodie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Checkout</Nav.Link>
            <Nav.Link  href="#memes">
             Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;