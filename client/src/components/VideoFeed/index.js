import React from "react";
import YouTube from 'react-youtube';

class VideoFeed extends React.Component {
  render() {
    const opts = {
      height: '480',
      width: '720',
      playerVars: {
        https:"developers.google.com/youtube/player_parameters",
        autoplay: 1,
      },
    };

    return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}



//   return(
//     <h1>This is the list of videos</h1>
//   )
// }

export default VideoFeed;
