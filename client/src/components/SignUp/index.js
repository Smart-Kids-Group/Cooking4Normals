import React, { useState, useContext } from "react";
import { auth } from "../../utils/firebase.js"
import { useHistory } from "react-router-dom";
import "./signup.scss"
import API from "../../utils/API.js";
import UserContext from "../../utils/UserContext"
import Alert from "react-bootstrap/Alert";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserProfile} = useContext(UserContext);

  const signup = () => {
  
    auth.createUserWithEmailAndPassword(email,password).then(res => {
      setUserProfile( {
        email: email,
        password: password,
        userId: res.user.uid
      });
      API.createChatUser(email,password);
      history.push("/profile");
      API.updateUser(userProfile).then (res => console.log("User Updated"))
      
    })
   .catch(err => {
    return <Alert variant ="danger">Please try again with different credentials. </Alert>
  
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