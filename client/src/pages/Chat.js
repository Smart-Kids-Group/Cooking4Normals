import React from "react";
import { ChatEngine } from "react-chat-engine";
import "../App.css";
import ChatFeed from "../components/Chat/ChatFeed";
import { useContext } from "react";
import axios from "axios";
import UserContext from "../utils/UserContext";
import Footer from "../components/Footer/index";

function Chat() {
  const { user } = useContext(UserContext);

  if (!localStorage.getItem("username")) {
    const authObject = {
      "Project-ID": "bbe806e8-81f3-4f62-92b4-957850212ca6",
      "User-Name": user.email,
      "User-Secret": user.password,
    };

    try {
      axios
        .get("https://api.chatengine.io/chats", { headers: authObject })
        .then((res) => {
          localStorage.setItem("username", user.email);
          localStorage.setItem("password", user.password);
        });
    } catch (error) {
      throw error;
    }
  }
  if (!localStorage.getItem('username')) return <Auth />;
  const projectID = "bbe806e8-81f3-4f62-92b4-957850212ca6";

  return (
    <>
        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
      <Footer />
    </>
  );
}
export default Chat;
