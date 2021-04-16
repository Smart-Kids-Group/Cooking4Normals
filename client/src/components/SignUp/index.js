import React, { useState } from "react";
import { auth } from "../../utils/firebase.js"
import { useHistory } from "react-router-dom";
import "./signup.scss"

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    auth.createUserWithEmailAndPassword(email,password).then(res => {

      history.push("/feed");
    }).catch(err => {})
  }

  return (
    <div className="signUp">
      <h1> Register your account</h1>
      <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input type="password" placeholder="Emter your passwprd" value={password} onChange={e =>setPassword(e.currentTarget.value)} />
      <button onClick={signup}>Sign Up</button>
    </div>
  )
}

export default SignUp