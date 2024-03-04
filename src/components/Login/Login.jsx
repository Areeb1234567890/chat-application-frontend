import React from "react";
import { Container, Form, Button } from "./LoginStyles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Form>
        <img src={logo} alt="logo" />
        <h1>Welcome Back!</h1>
        <h3>Please enter your accounts to Login.</h3>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <Button>Login</Button>
        <hr />
        <div className="redirect">
          <h3>If you don't have an account?</h3>
          <Link to="/register">
            <h3 className="Route">Register</h3>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
