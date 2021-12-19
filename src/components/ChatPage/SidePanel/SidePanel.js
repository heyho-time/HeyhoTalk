import React from "react";
import "./SidePanel.css";
import UserPanel from "./UserPanel/UserPanel";
import Favorite from "./Favorite/Favorite";
import DirectMessage from "./DirectMessage/DirectMessage";
import ChatRoom from "./ChatRoom/ChatRoom";

const SidePanel = () => {
  return (
    <>
      <div className="sidePanel">
        <UserPanel />
        <Favorite />
        <ChatRoom />
        <DirectMessage />
      </div>
    </>
  );
};

export default SidePanel;
