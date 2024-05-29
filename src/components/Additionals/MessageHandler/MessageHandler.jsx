import React from "react";
import { ChatMain } from "./MessageStyles";
import FileService from "../../../services/fileService";
import { format } from "date-fns";

const MessageHandler = ({ message, userId }) => {
  return (
    <ChatMain>
      {message && message.length > 0
        ? message.map((data, index) => {
            return (
              <>
                {data.senderId === userId ? (
                  <div className="sendCon" key={index}>
                    <div className="send">
                      {data.attachments && (
                        <FileService url={data.attachments.url} />
                      )}
                      <h3>{data.message}</h3>
                      <span>{format(new Date(data.time), "HH:mm aa")}</span>
                    </div>
                  </div>
                ) : (
                  <div className="recevingCon" ke y={index}>
                    <div className="receive">
                      {data.attachments && (
                        <FileService url={data.attachments.url} />
                      )}
                      <h3>{data.message}</h3>
                      <span>{format(new Date(data.time), "HH:mm aa")}</span>
                    </div>
                  </div>
                )}
              </>
            );
          })
        : ""}
    </ChatMain>
  );
};

export default MessageHandler;
