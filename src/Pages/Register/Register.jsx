import React, { useState } from "react";
import { Container, Form, Button } from "../Login/LoginStyles";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const value = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.value !== "") {
      navigate(`/details`, {
        replace: true,
        state: {
          email: data.email,
          password: data.password,
        },
      });
    }
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <img src={logo} alt="logo" />
        <h1>Register</h1>
        <h3>Please enter your details to Register.</h3>

        <input
          type="email"
          name="email"
          required
          onChange={(e) => inputHandler(e)}
          placeholder="Enter your email"
        />
        <div className="passwordCon">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            onChange={(e) => inputHandler(e)}
            placeholder="Enter your password"
          />
          <span onClick={togglePasswordVisibility} className="toggle-password">
            {showPassword ? "🔓" : "🔒"}
          </span>
        </div>
        <Button>Next</Button>
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
