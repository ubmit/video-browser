import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
    // adding a key to an interator is a good practice
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    // stay away from for loops as much as possible
  );
};

export default VideoList;