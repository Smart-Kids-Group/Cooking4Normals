import React, { useState, useEffect } from "react";
import VideoSearch from "../components/VideoSearch";
import VideoFeed from "../components/VideoFeed";
import Footer from "../components/Footer/index";
import API from "../utils/API";

function Video() {

  const [videos, setVideos] = useState([]);
  const [videoSearch, setVideoSearch] = useState("bread");

  useEffect(() => {
    loadVideos()
  }, [])

  function loadVideos() {
    API.searchVideos(videoSearch)
      .then(res => 
        {setVideos(res.items);
        console.log(videos)}
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { value } = event.target;
       setVideoSearch(value)
};

  function handleSearchSubmit(event){
    event.preventDefault();
   
      loadVideos();
    };

  return (
    <>
      <div className="bg">
      <VideoSearch handleInputChange= {handleInputChange}        handleSearchSubmit= {handleSearchSubmit}/>
    <VideoFeed />
        <Footer />
      </div>
    </>
  );
}
export default Video;
