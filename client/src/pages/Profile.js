import React from "react";
import ProfileIntro from "../components/ProfileIntro";
import Footer from "../components/Footer";
import EditProfile from "../components/UpdateProfile";

function Profile() {
  return (
    <>
      <div className="bg">
        <EditProfile />
        <ProfileIntro />
      </div>
      <Footer />
    </>
  );
}
export default Profile;
