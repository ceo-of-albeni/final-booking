import React, { useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../styles/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//my imports
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

function NavScrollExample() {
  const navigate = useNavigate();

  const { currentUser, checkAuth, handleLogout } = useContext(authContext);

  // useEffect(() => {
  //   if (localStorage.getItem("tokens")) {
  //     checkAuth();
  //   }
  // }, []);

  return (
    <Navbar
      // fixed="top"
      style={{
        background: "rgb(251,255,255)",
        background:
          "linear-gradient(90deg, rgba(251,255,255,1) 10%, rgba(249,191,85,1) 74%, rgba(255,165,0,1) 100%)",
      }}
      variant="light"
      expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")} style={{marginLe}}>
          <img
            src="https://my.alatoo.edu.kg/images/logo_text.png"
            width="200"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link onClick={() => navigate("/add")}>Add</Nav.Link>
            <Nav.Link onClick={() => navigate("/places")}>Places</Nav.Link>

            {/* <Nav.Link href="#" disabled>
              {currentUser ? currentUser : "No auth user"}s
            </Nav.Link> */}
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form> */}
          </Nav>

          <div className="box-3" onClick={() => navigate("/login")}>
            <div className="btn btn-three">
              <span style={{ color: "white" }}>Log In</span>
            </div>
          </div>

          {/* <Button variant="outline-danger" onClick={() => navigate("/login")}>
            Log in
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
