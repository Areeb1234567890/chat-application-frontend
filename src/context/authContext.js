import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};

  const Login = async ({ data, navigate }) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_LOGIN_URL}`, data);
      const { user, success, token, msg } = res.data;
      if (success) {
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
      toast.error(error.response.data.msg);
    }
  };

  const Register = async ({ data, navigate }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_REGISTER_URL}`,
        data
      );
      if (res) {
        toast.success(res.data.msg);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const updateUser = async ({ data }) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_UPDATE_USER_URL}/${userId}`,
        data
      );
      if (res) {
        const updatedUserData = res.data.user;
        const authUserData = JSON.parse(sessionStorage.getItem("authUser"));
        const newAuthUserData = {
          ...authUserData,
          userId: updatedUserData._id,
          name: updatedUserData.name,
          profilePicture: updatedUserData.profileImage,
          bio: updatedUserData.bio,
          email: updatedUserData.email,
        };
        sessionStorage.setItem("authUser", JSON.stringify(newAuthUserData));
        toast.success(res.data.msg);
        // window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const deleteProfile = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_DELETE_PICTURE_URL}/${userId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        const { user, msg } = res.data;
        const updatedUserData = user;
        const authUserData = JSON.parse(sessionStorage.getItem("authUser"));
        const newAuthUserData = {
          ...authUserData,
          userId: updatedUserData._id,
          name: updatedUserData.name,
          profilePicture: updatedUserData.profileImage || "",
          bio: updatedUserData.bio,
          email: updatedUserData.email,
        };
        sessionStorage.setItem("authUser", JSON.stringify(newAuthUserData));
        toast.success(msg);
        // window.location.reload();
      }
    } catch (error) {
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
    updateUser,
    deleteProfile,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
