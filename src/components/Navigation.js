import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
function Navigation() {
  return (
    <div>
        
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/service">Service</Nav.Link>
      <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
    </div>
  )
}

export default Navigation;