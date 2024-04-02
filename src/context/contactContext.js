import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};

  const contextValue = {};

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
