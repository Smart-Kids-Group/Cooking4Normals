import React from "react";
import UserDash from "../components/UserDash/index";
import Footer from "../components/Footer/index";

function Dashboard() {

  return (
    <>
      <div className="bg">
        <UserDash />
        <div className="main" class="Fed">
          <h1>End of the feed, Happy Cooking!</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
