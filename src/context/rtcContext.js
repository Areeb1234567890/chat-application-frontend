import { createContext, useContext, useMemo } from "react";

const RtcContext = createContext(null);

export const RtcProvider = ({ children }) => {
  const peer = useMemo(() => new RTCPeerConnection(), []);

  const createOffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    return offer;
  };

  return (
    <RtcContext.Provider value={{ peer, createOffer }}>
      {children}
    </RtcContext.Provider>
  );
};

export const useRtc = () => {
  const Rtc = useContext(RtcContext);
  return Rtc;
};
