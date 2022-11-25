import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();

  return (
    <Navbar
      // fixed="top"
      style={{ backgroundColor: "orange" }}
      variant="dark"
      expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src="https://my.alatoo.edu.kg/images/logo_text.png"
            width="200"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            {/* <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item>Register</NavDropdown.Item>
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item>Classes</NavDropdown.Item>
              <NavDropdown.Item>Labs</NavDropdown.Item>
              <NavDropdown.Item>Canteen</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
              {/* {currentUser ? currentUser : "No auth user"}s */}
            </Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={() => navigate("/login")}>
            Log in
          </Button>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
