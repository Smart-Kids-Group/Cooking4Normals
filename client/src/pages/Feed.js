import React from "react";
import { auth } from "../utils/firebase";
import UserFeed from "../components/UserFeed/index";
import Footer from "../components/Footer/index";

function Feed(props) {
  const logOut = () => {
    auth
      .signOut()
      .then((res) => {
        props.history.push("/auth");
        //do something else with res
      })
      .catch((err) => {
        //do something else with err
      });
  };

  return (
    <>
      <UserFeed />
      <div className="main">
        <h1>End of the feed, Happy Cooking!</h1>
        <button onClick={logOut}>Log out</button>
      </div>
      <Footer />
    </>
  );
}

export default Feed;
