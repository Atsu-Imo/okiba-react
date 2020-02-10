import React from "react";
import { IVideo } from "../type/IVideo";

type videoProp = {
  videos: IVideo[];
};

const Videos = (prop: videoProp) => {
  return (
    <div className="videos">
      {prop.videos.map((video) => {
        return (
          <div key={video.VideoID} className="column">
            {video.Title}
          </div>
        )
      })}
    </div>
  );
};
export default Videos;
