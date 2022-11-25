import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/loginNregister.css";

const Registration = () => {
  return (
    <div className="login-form">
      <img
        src="https://st-1.akipress.org/st_all/bilim/9/1519540999.2.jpg"
        alt=""
        width="100"
      />
      {/* <h2>Login</h2> */}
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            It must be an alatoo email address.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          {/* <Form.Text className="text-muted">please enter password.</Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          {/* <Form.Text className="text-muted">please enter password.</Form.Text> */}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="outline-danger" type="submit">
          Sign Up
        </Button>
      </Form>
      <br />
    </div>
  );
};

export default Registration;
