import React from "react";

const Video = ({ embedId }) => {
  return (
    <div className="video_container">
      <div className="video_content">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="TEST VIDEO"
      />
      </div>
      
    </div>
  );
};

export default Video;
