import React from "react"; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/esm/Image";

const AppHome = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Image
        className="bg-image"
        style={{
          height: 60,
          flex: 1,
          width: null,
        }}
        src={require("../assets/images/logo.png")} />
      <Container>
        <Navbar.Brand as={Link} to="/home">Dominos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" ><button varient="outline-primary" >Login</button>{' '}</Nav.Link>
            <Nav.Link as={Link} to="/register"><button varient="outline-primary" >Register</button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppHome;
