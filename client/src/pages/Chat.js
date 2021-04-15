import React from "react";
import { ChatEngine } from "react-chat-engine";
import "../App.css";
import LoginForm from "../components/Chat/LoginForm";
import ChatFeed from "../components/Chat/ChatFeed";



function Chat() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="bbe806e8-81f3-4f62-92b4-957850212ca6"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    
  );
}
export default Chat;
