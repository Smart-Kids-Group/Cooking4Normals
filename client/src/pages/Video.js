import React, { useState, useEffect } from "react";
import VideoSearch from "../components/VideoSearch";
import VideoFeed from "../components/VideoFeed";
import Footer from "../components/Footer/index";
import API from "../utils/API";
import YTSearch from "youtube-api-search";
const googleToken = process.env.REACT_APP_GOOGLE_API_KEY

function Video() {

  const [videoState, setVideoState] = useState({
    videos: [],
    displayVideo: null});
  const [videoSearch, setVideoSearch] = useState("bread");

  useEffect(() => {
    searchVideos()
  }, [])

  function handleInputChange(event) {
    const { value } = event.target;
       setVideoSearch(value)
       
};

  function handleSearchSubmit(event){
    event.preventDefault();
   
      searchVideos(videoSearch);
    };

   function searchVideos(query) {
      YTSearch({key: googleToken, term: query}, (videos) => {
        setVideoState({
          videos: videos,
          displayVideo: videos[0]
        });
          console.log(videos)
      })
    }

  return (
    <>
      <div className="bg">
      <VideoSearch 
        handleInputChange= {handleInputChange} 
        handleSearchSubmit= {handleSearchSubmit}/>
    {/* <VideoFeed /> */}
        <Footer />
      </div>
    </>
  );
}
export default Video;
