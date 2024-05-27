import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSocket } from "./socketProvider";
const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};
  const [contacts, setContacts] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    if (userId) {
      socket.emit("userId", userId);
    }
  }, [userId]);

  useEffect(() => {
    socket.on("updateContactsReceiver", (data) => {
      toast.success(data.msg);
      getContacts(data.id);
    });

    socket.on("updateContactsSender", (data) => {
      toast.success(data.msg);
      getContacts(data.id);
    });

    socket.on("addContactError", (error) => {
      toast.error(error.msg);
    });

    return () => {
      socket.off("addContactError");
      socket.off("updateContactsReceiver");
      socket.off("updateContactsSender");
    };
  }, [socket]);

  const addContact = ({ data }) => {
    socket.emit("addContact", data);
  };

  const getContacts = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_GET_CONTACT_URL}/${id}`
      );
      setContacts(res.data.contacts);
    } catch (error) {
      // toast.error(error.response.data.msg);
      console.log(error);
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
