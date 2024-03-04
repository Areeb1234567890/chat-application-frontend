import React from "react";
import { Container, Form, Button } from "../Login/LoginStyles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Form style={{ height: "68%" }}>
        <img src={logo} alt="logo" />
        <h1>Reister</h1>
        <h3>Please enter your details to Register.</h3>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <Button>Register</Button>
        <hr />
        <div className="redirect">
          <h3>If you already have an account?</h3>
          <Link to="/login">
            <h3 className="Route">Login</h3>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
