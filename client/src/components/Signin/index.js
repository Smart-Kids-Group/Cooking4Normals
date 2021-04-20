import React, { useContext, useState } from "react";
import { auth } from "../../utils/firebase.js"
import { useHistory } from "react-router-dom";
import "./signin.scss"
import UserContext from "../../utils/UserContext.js";


function SignIn() {

  const { setUser } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then ( res => {
      setUser( {email:email, password: password} );
      history.push("/dashboard");
    }).catch (err => {
      console.log("Incorrect email or password.")
    })
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