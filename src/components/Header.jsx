import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import "../styles/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

function NavScrollExample() {
  const navigate = useNavigate();

  // const { currentUser, checkAuth, handleLogout } = useContext(authContext);

  // useEffect(() => {
  //   if (localStorage.getItem("tokens")) {
  //     checkAuth();
  //   }
  // }, []);

  return (
    <Navbar style={{ backgroundColor: "#f6b0b03a" }} variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src="https://my.alatoo.edu.kg/images/logo_text.png"
            width="200"
            alt=""
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link id="navlink" onClick={() => navigate("/add")}>
              ADD
            </Nav.Link>
            <Nav.Link id="navlink" onClick={() => navigate("/about")}>
              ABOUT
            </Nav.Link>
            <Nav.Link id="navlink" onClick={() => navigate("/places")}>
              PLACES
            </Nav.Link>
          </Nav>

          <div className="box-3" onClick={() => navigate("/login")}>
            <div className="btn btn-three">
              <span style={{ color: "white" }}>Log In</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
