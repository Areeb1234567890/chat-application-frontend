import { createContext, useContext, useMemo, useState } from "react";

const RtcContext = createContext(null);

export const RtcProvider = ({ children }) => {
  const peer = useMemo(() => new RTCPeerConnection(), []);

  const createOffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    return offer;
  };

  const createAnswer = async (offer) => {
    await peer.setRemoteDescription(offer);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    return answer;
  };

  const rejectOffer = async () => {
    await peer.setLocalDescription({ type: "rollback" });
  };

  const value = { peer, createOffer, createAnswer, rejectOffer };

  return <RtcContext.Provider value={value}>{children}</RtcContext.Provider>;
};

export const useRtc = () => {
  const Rtc = useContext(RtcContext);
  return Rtc;
};
