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
        console.log(user);
        const authUserData = JSON.stringify({
          token,
          userId: user._id,
          name: user.name,
          profilePicture: user.profileImage,
          bio: user.bio,
          email: user.email,
        });
        sessionStorage.setItem("authUser", authUserData);
        navigate("/");
        window.location.reload();
        toast.success(msg);
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
    window.location.reload();
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
