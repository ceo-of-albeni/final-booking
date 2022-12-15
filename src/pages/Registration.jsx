import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Loader from "../components/Loader";
import "../styles/loginNregister.css";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { handleRegister, error, setError, loading } = useContext(authContext);

  const navigate = useNavigate();

  function createUser() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    handleRegister(formData, navigate);
  }

  // useEffect(() => {
  //   setError(false);
  // }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="login-form" style={{ height: "545px" }}>
        {/* <img
        src="https://st-1.akipress.org/st_all/bilim/9/1519540999.2.jpg"
        alt=""
        width="100"
      /> */}
        <h2 className="mt-1">Sign Up</h2>

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
            {/* <Form.Text className="text-muted">please enter password.</Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label onChange={e => setPasswordConfirm(e.target.value)}>
              Password confirmation
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
            {/* <Form.Text className="text-muted">please enter password.</Form.Text> */}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Admin" />
        </Form.Group> */}
          {/* <Button
            variant="outline-danger"
            type="submit"
            onClick={() => createUser(email, password)}>
            Sign Up
          </Button> */}
          <a
            onClick={() => createUser(email, password)}
            class="logbutton btn-5">
            Done
          </a>
        </Form>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
