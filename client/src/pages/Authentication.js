import React, { useState, useEffect } from "react";
import SignIn from "../components/Signin";
import SignUp from "../components/SignUp";
import { auth } from "../utils/firebase";
import { useHistory } from "react-router-dom";
import "./auth.scss";
import Footer from "../components/Footer/index";

function Auth() {
  const history = useHistory();
  const [authType, setAuthType] = useState("signIn");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) history.push("/feed");
    });
  }, [history]);

  return (
    <div className="auth bg">
      {authType === "signIn" ? (
        <div className="container">
          <SignIn />
          <p>
            New here?{" "}
            <span onClick={() => setAuthType("signUp")}>Create account.</span>
          </p>

        </div>
      ) : (
        <div className="container">
          <SignUp />
          <p>
            Have an account?{" "}
            <span onClick={() => setAuthType("signIn")}>Sign In.</span>
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Auth;
