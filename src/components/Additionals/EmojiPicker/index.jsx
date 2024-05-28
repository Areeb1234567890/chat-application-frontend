import React from "react";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";

const CustomEmojiPicker = ({ onSelectEmoji }) => {
  const handleEmojiClick = (event) => {
    if (event && event.emoji) {
      console.log(event, event.emoji, "falg");
      onSelectEmoji(event.emoji);
    }
  };

  return (
    <Conatiner>
      <StyledEmojiPicker onEmojiClick={handleEmojiClick} />
    </Conatiner>
  );
};

export default CustomEmojiPicker;

const Conatiner = styled.div`
  position: absolute;
  bottom: 65px;
  width: 100%;
  z-index: 10;
`;

const StyledEmojiPicker = styled(EmojiPicker)`
  width: 100% !important;
  border-color: #202c33 !important;
  background-color: #202c33 !important;
  [class^="epr"] {
    --epr-picker-border-color: none !important;
    --epr-category-label-bg-color: #202c33 !important;
    --epr-search-input-bg-color: #2a3942 !important;
    --epr-search-input-bg-color-active: #2a3942 !important;
    --epr-preview-border-color: none !important;
  }
`;
