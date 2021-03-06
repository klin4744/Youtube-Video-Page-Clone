import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe classname="embed-responsive-item" src={url} />
      </div>
      <div className="details ">
        <h5>{video.snippet.title}</h5>
        <hr />
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
