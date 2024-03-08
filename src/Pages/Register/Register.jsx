import React, { useState } from "react";
import { Container, Form, Button } from "../Login/LoginStyles";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Register = () => {
  const navigate = useNavigate();
  const { Register } = useAuthContext();
  const value = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(value);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await Register({ data, navigate });
  };

  return (
    <Container>
      <Form
        style={{ height: "68%" }}
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <img src={logo} alt="logo" />
        <h1>Register</h1>
        <h3>Please enter your details to Register.</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => inputHandler(e)}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => inputHandler(e)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => inputHandler(e)}
          placeholder="Enter your password"
        />
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
