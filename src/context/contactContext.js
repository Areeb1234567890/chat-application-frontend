import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import io from "socket.io-client";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};
  const [contacts, setContacts] = useState([]);

  const addContact = async ({ data }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_ADD_CONTACT_URL}/${userId}`,
        data
      );
      toast.success(res.data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const getContacts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_GET_CONTACT_URL}/${userId}`
      );
      setContacts(res.data.contacts);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const contextValue = { addContact, getContacts, contacts };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
