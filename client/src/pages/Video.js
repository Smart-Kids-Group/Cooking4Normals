import React from "react";
import VideoSearch from "../components/VideoSearch";
import VideoFeed from "../components/VideoFeed";
import YTSearch from "youtube-api-search";

function Video() {
  return (
    <>
    <VideoSearch />
    <VideoFeed />
    </>
  )
}
export default Video;