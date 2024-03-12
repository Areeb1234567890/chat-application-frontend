import React, { useState } from "react";
import { Container, Form2, Button } from "../Login/LoginStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import avatar2 from "../../assets/images/avatar2.png";
import logo from "../../assets/images/logo.png";

const Details = () => {
  const navigate = useNavigate();
  const { Register } = useAuthContext();
  const location = useLocation();
  const { email, password } = location.state;
  const value = {
    email: email,
    password: password,
    name: "",
    bio: "",
    file: "",
  };
  const [data, setData] = useState(value);
  const [selectedImage, setSelectedImage] = useState(avatar2);

  const inputHandler = (e) => {
    const { name } = e.target;
    if (name === "file") {
      const file = e.target.files[0];
      setData({ ...data, [name]: file });
      const reader = new FileReader();
      reader.onload = function (event) {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      const value = e.target.value;
      setData({ ...data, [name]: value });
    }
  };

  const Submithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("name", data.name);
    formData.append("bio", data.bio);
    formData.append("file", data.file);
    await Register({ data: formData, navigate });
  };
  return (
    <Container>
      <Form2
        image={selectedImage}
        onSubmit={(e) => {
          Submithandler(e);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img src={logo} alt="logo" />
          <h1>Details</h1>
        </div>
        <h3>Please enter your details to Register.</h3>

        <div className="container">
          <div className="ImgInput">
            <div className="imgCon">
              <input
                className="File"
                onChange={(e) => {
                  inputHandler(e);
                }}
                type="file"
                name="file"
              />
              <div className={`hover `}>
                <span>
                  CLICK TO UPLOAD <br /> PROFILE PHOTO
                </span>
              </div>
            </div>
          </div>

          <div className="inputs">
            <input
              type="text"
              name="name"
              required
              onChange={(e) => {
                inputHandler(e);
              }}
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="bio"
              required
              onChange={(e) => {
                inputHandler(e);
              }}
              placeholder="Enter Bio"
            />
          </div>
        </div>

        <Button>Register</Button>
        <hr />
        <div className="redirect">
          <h3>If you have any issue?</h3>
          <Link to="/register">
            <h3 className="Route">Change email</h3>
          </Link>
        </div>
      </Form2>
    </Container>
  );
};

export default Details;
