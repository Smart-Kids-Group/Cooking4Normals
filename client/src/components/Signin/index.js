import React, { useContext, useState } from "react";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import "./signin.scss";
import UserContext from "../../utils/UserContext.js";
import Alert from "react-bootstrap/Alert";


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
      return <Alert variant ="danger">Incorrect email or password. </Alert>
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