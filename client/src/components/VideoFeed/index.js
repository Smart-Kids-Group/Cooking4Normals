import React from "react";
import YouTube from 'react-youtube';
import './VideoFeed.css';

class VideoFeed extends React.Component {
  render() {
    const opts = {
      height: '450',
      width: '800',
      playerVars: {
        https:"developers.google.com/youtube/player_parameters",
        autoplay: 1,
      },
    };

    return (
    <div className="sticky-video">
    <YouTube videoId={this.props.videoid} opts={opts} onReady={this._onReady} />;
    </div>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoFeed;
