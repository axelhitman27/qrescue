import React from "react";

import helmetVideo from "../assets/video_helmet.mp4";
import "./VideoPage.css"; 

const VideoPage = () => {
  return (
    <div className="video-container" >
        <video
          src={helmetVideo}
          autoPlay
          loop
          muted/>
  </div>
  );
}

export default VideoPage;