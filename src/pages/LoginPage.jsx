import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import Loader from "../components/Loader";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import "../styles/buttonsLog.css";

const LoginPage = () => {
  const { handleLogin, error, setError, loading } = useContext(authContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    if (!email.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="login-form" style={{ height: "548px" }}>
        <h2 className="mt-1">Login</h2>
        {error ? <h2>{error}</h2> : null}
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              It must be an alatoo email address.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>

          <a
            onClick={() => loginUser(email, password)}
            className="logbutton btn-5">
            Done
          </a>
        </Form>
        <span className="mt-2">
          Don't have an account yet?{"  "}
          <a id="register_link" onClick={() => navigate("/register")}>
            {" "}
            Register
          </a>
        </span>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
