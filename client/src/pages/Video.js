import React from "react";
import VideoFeed from "../components/VideoFeed";
import VideoSearch from "../components/VideoSearch";
import Footer from "../components/Footer/index";

function Video() {
  return (
    <>
      <div className="bg">
        <VideoSearch />
        <VideoFeed />
        <Footer />
      </div>
    </>
  );
}
export default Video;
