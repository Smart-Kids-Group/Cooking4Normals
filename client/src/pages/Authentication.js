import React, { useState, useEffect, useContext } from "react";
import SignIn from "../components/Signin";
import SignUp from "../components/SignUp";
import { auth } from "../utils/firebase";
import { useHistory } from "react-router-dom";
import "./auth.scss";
import Footer from "../components/Footer/index";
import UserContext from "../utils/UserContext";

function Auth() {
  const history = useHistory();
  const [authType, setAuthType] = useState("signIn");
  const { userProfile, setUserProfile } = useContext(UserContext)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserProfile ({ ...userProfile,
          email: user.email,
          password:user.password,
          userId: user.uid
        });
        history.push("/dashboard");

    }});
  }, [history]);

  return (
    <>
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
    </div>
    <Footer />
    </>
  );
}

export default Auth;
