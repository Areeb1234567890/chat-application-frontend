import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FileService = ({ url }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    const extension = url.split(".").pop().split("?")[0];
    switch (extension.toLowerCase()) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        setType("image");
        break;
      case "mp4":
      case "mkv":
      case "avi":
        setType("video");
        break;
      case "mp3":
      case "wav":
        setType("audio");
        break;
      case "pdf":
      case "doc":
      case "docx":
        setType("document");
        break;
      default:
        setType("unknown");
    }
  }, [url]);

  return (
    <Container>
      {type === "image" && <img src={url} />}
      {type === "video" && <iframe src={url} frameborder="0" />}
    </Container>
  );
};

export default FileService;

const Container = styled.div`
  height: inherit;
  width: inherit;
  /* img {
    max-height: 100%;
    max-width: 100%;
  } */
`;
