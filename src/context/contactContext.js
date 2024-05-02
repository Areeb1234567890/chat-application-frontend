import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSocket } from "./socketProvider";
// import { io } from "socket.io-client";
const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    socket.on("updateContacts", (data) => {
      toast.success(data.msg);
      console.log(data.id);
      // getContacts(data.id);
    });

    socket.on("addContactError", (error) => {
      toast.error(error.msg);
    });

    return () => {
      socket.off("addContactError");
      socket.off("updateContacts");
    };
  }, [socket]);

  const addContact = ({ data }) => {
    console.log("this addContact is working", data);
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
