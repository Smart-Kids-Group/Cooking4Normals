import React from "react";
import { auth } from "../utils/firebase";
import UserDash from "../components/UserDash/index";
import Footer from "../components/Footer/index";

function Dashboard(props) {
  const logOut = () => {
    auth
      .signOut()
      .then((res) => {
        props.history.push("/sign-up");
        //do something else with res
      })
      .catch((err) => {
        //do something else with err
      });
  };

  return (
    <>
      <div className="bg">
        <UserDash />
        <div className="main Fed">
          <h1>End of the feed, Happy Cooking!</h1>
          <button className="logout" onClick={logOut}>Log out</button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
