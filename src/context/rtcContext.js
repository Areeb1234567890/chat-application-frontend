import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RtcContext = createContext(null);

export const RtcProvider = ({ children }) => {
  const peer = useMemo(() => new RTCPeerConnection(), []);
  const [remoteStream, setRemoteStream] = useState(null);

  const handleStreams = (ev) => {
    const streams = ev.streams;
    setRemoteStream(streams[0]);
  };

  useEffect(() => {
    peer.addEventListener("track", handleStreams);
    return () => {
      peer.removeEventListener("track", handleStreams);
    };
  }, [peer, handleStreams]);

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

  const saveAnswer = async (answer) => {
    await peer.setRemoteDescription(answer);
  };

  const sendStream = async (stream) => {
    const tracks = stream.getTracks();
    for (const track of tracks) {
      peer.addTrack(track, stream);
    }
  };

  const value = {
    peer,
    createOffer,
    createAnswer,
    rejectOffer,
    saveAnswer,
    sendStream,
    remoteStream,
  };

  return <RtcContext.Provider value={value}>{children}</RtcContext.Provider>;
};

export const useRtc = () => {
  const Rtc = useContext(RtcContext);
  return Rtc;
};
