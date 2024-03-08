import React, { useState } from "react";
import { Container, Form, Button, Hr } from "./LoginStyles";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const value = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(value);
  const { Login } = useAuthContext();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login({ data, navigate });
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <img src={logo} alt="logo" />
        <h1>Welcome Back!</h1>
        <h3>Please enter your account to Login.</h3>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => inputHandler(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => inputHandler(e)}
        />
        <Button>Login</Button>
        <Hr />
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
