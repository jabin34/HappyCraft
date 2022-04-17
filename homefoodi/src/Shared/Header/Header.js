import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebse.init';
const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    
  };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">Home Foodie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
            {user? <Nav><Nav.Link onClick={logout}>Singout</Nav.Link><Nav.Link >{user?.displayName}</Nav.Link></Nav>:
            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;