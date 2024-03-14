import React from "react";
import spinner from "../../../assets/images/Spinner.svg";

const Loader = () => {
  return (
    <div className="loadingContainer">
      <img className="loader" src={spinner} alt="spinner" />
    </div>
  );
};

export default Loader;
