import React, { useState } from "react";
import { auth } from "../../utils/firebase.js"
import { useHistory } from "react-router-dom";
import "./signup.scss"
import API from "../../utils/API.js";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
  
    auth.createUserWithEmailAndPassword(email,password).then(res => {
      API.createChatUser(email,password);
      API.saveUser(email);
      history.push("/profile");
    }).catch(err => {
      console.log("Please try again with different credentials.")
    })

  }

  return (
    <div className="signUp">
      <h1> Register your account</h1>
      <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input type="password" placeholder="Enter your password" value={password} onChange={e =>setPassword(e.currentTarget.value)} />
      <button onClick={signup}>Sign Up</button>
    </div>
  )
}

export default SignUp