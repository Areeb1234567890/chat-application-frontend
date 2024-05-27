import React, { useState } from "react";
import { Container, Form, Button, Hr } from "./LoginStyles";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import Loader from "../../components/Additionals/Loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const value = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(value);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [showPassword, setShowPassword] = useState(false);
  const { Login } = useAuthContext();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await Login({ data, navigate });
    setIsLoading(false);
  };

  return (
    <Container>
      {isLoading ? <Loader /> : ""}
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
        <div className="passwordCon">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            onChange={(e) => inputHandler(e)}
          />
          <span onClick={togglePasswordVisibility} className="toggle-password">
            {showPassword ? "🔓" : "🔒"}
          </span>
        </div>
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
