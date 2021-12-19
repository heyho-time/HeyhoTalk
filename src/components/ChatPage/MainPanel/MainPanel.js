import React, { Component } from "react";
import "./MainPanel.css";
// import Message from "./Message/Message";
import MessageForm from "./Message/MessageForm";
import MessageHeader from "./Message/MessageHeader";

export default class MainPanel extends Component {
  render() {
    return (
      <>
        <div className="mainPanel">
          <MessageHeader />
          <div className="mainBody"></div>
          <MessageForm />
        </div>
      </>
    );
  }
}
