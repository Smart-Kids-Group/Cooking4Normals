import React, { useState } from "react";
import { auth } from "../../utils/firebase.js"
import { useHistory } from "react-router-dom";
import "./signin.scss"


function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then ( res => {
      history.push("/feed");
    }).catch (err => {})
  }

  return (
    <div className="signIn">
      <h1> Sign in to your account</h1>
      <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input type="password" placeholder="Enter your password" value={password} onChange={e =>setPassword(e.currentTarget.value)} />
      <button onClick={signin}> Log In</button>
    </div>
  )
}

export default SignIn