import React, { useState, useEffect } from "react";
import VideoSearch from "../components/VideoSearch/VideoSearch";
import VideoList from "../components/VideoList";
import Footer from "../components/Footer/index";
import YTSearch from "youtube-api-search";
const googleToken = process.env.REACT_APP_GOOGLE_API_KEY

function Video() {

  const [videoState, setVideoState] = useState({
    videos: [],
    displayVideo: null});
  const [videoSearch, setVideoSearch] = useState("Gordon Ramsey");

  useEffect(() => {
    searchVideos(videoSearch)
  }, [videoSearch])

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
      })
    }

  return (
    <>
      <div className="bg">
      <VideoSearch 
        handleInputChange= {e=>handleInputChange(e)} 
        handleSearchSubmit= {e => handleSearchSubmit(e)}/>
    <VideoList data={videoState}/>
        <Footer />
      </div>
    </>
  );
}
export default Video;
