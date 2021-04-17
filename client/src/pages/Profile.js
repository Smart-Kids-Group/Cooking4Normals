import React from "react";
import ProfileIntro from "../components/ProfileIntro";
import Footer from "../components/Footer/index";

function Profile() {
  return (
    <>
      <div className="bg">
        <ProfileIntro />
      </div>
      <Footer />
    </>
  );
}
export default Profile;
