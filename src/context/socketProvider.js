import { createContext, useContext, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};

  // const socket = useMemo(() => io("localhost:4000"), []);

  const socket = useMemo(() => {
    const newSocket = io("localhost:4000");
    newSocket.on("connect", () => {
      if (userId) {
        newSocket.emit("userId", userId);
      }
    });
    return newSocket;
  }, [userId]);

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
