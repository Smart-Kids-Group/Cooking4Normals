import React, {  useState } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoFeed from "../VideoFeed"
import VideoCard from "../VideoCard"


function VideoList(props){
  const [videoId, setVideoId] = useState(0)

  function handleClick(event) {
    const { videoid } = event.target.dataset;
      setVideoId(videoid);
      

  }

  return(
      <Row>
      <Col sm={5}>
    
     {props.data.videos
          ? props.data.videos.map((video, i) => (
              <VideoCard
              key={i}
              data={video}
              handleVideoSubmit={handleClick}
              />
            ))
          : null}
    </Col>
    <Col sm={7}>
      <VideoFeed {...props} videoId={videoId}/>
    
    </Col>
    </Row>

  )
      }
      export default VideoList;