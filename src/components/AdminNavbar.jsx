import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/esm/Image";

const AdminNavbar = () => {
  return (
    <>
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
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/dish">
                Dish
              </Nav.Link>
              <Nav.Link as={Link} to="/history">
                History
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                {" "}
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/logout">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <table class="table">
          <thead>
            <h2>Welcome</h2>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><h3>Dish name</h3></th>
              <th scope="col"><h3>Price</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
            <h2>User Details</h2>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><h3>User name</h3></th>
              <th scope="col"><h3>Dish Name</h3></th>
              <th scope="col"><h3>Price</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminNavbar;
