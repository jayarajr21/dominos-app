import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/esm/Image";
const AppBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image
          className="bg-image"
          style={{
            height: 50,
            flex: 1,
            width: null,
          }}
          src={require("../assets/images/logo.png")}
        />
      <Container>
        <Navbar.Brand as={Link} to="/">
          Dominos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/dish">
              Dish
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/history">
              History
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;