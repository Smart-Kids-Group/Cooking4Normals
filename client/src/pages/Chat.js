import React from "react";
import { ChatEngine } from "react-chat-engine";
import "../App.css";
import ChatFeed from "../components/Chat/ChatFeed";
import { useContext } from 'react';
import axios from 'axios';
import UserContext from '../utils/UserContext';

function Chat() {

  const { user } = useContext(UserContext);
  
  if (!localStorage.getItem("username")) {
    const authObject ={ 'Project-ID': "bbe806e8-81f3-4f62-92b4-957850212ca6", 'User-Name': user.email, 'User-Secret': user.password };

        try {
          axios.get('https://api.chatengine.io/chats', { headers: authObject })
          .then(res => {
          localStorage.setItem('username', user.email);
          localStorage.setItem('password', user.password);
        })
        } catch (error){
            throw error};
}


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
