import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { ChatProvider } from "./context/chatContext";
import { ContactProvider } from "./context/contactContext";
import CssBaseline from "@mui/material/CssBaseline";
import { SocketProvider } from "./context/socketProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SocketProvider>
        <ChatProvider>
          <ContactProvider>
            <CssBaseline />
            <App />
          </ContactProvider>
        </ChatProvider>
      </SocketProvider>
    </AuthProvider>
  </React.StrictMode>
);
