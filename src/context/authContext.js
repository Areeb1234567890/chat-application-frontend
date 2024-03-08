import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const Login = async ({ data, navigate }) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_LOGIN_URL}`, data);
      const { user, success, token, msg } = res.data;
      if (success) {
        const authUserData = JSON.stringify({
          token,
          userName: user.name,
          userId: user._id,
        });
        sessionStorage.setItem("authUser", authUserData);
        toast.success(msg);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const Register = async ({ data, navigate }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_Register_URL}`,
        data
      );
      if (res) {
        toast.success(res.data.msg);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const Logout = ({ navigate }) => {
    sessionStorage.removeItem("authUser");
    navigate("/login");
    toast.success("Logout successfully");
  };

  const contextValue = {
    Login,
    Register,
    Logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
