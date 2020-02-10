import React from "react";
import { IVideo } from "../type/IVideo";

type videoProp = {
  videos: IVideo[];
};

const Videos = (prop: videoProp) => {
  return (
    <div className="videos">
      {prop.videos.map(video => {
        return (
          <div key={video.VideoID} className="column">
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + video.VideoID}
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
export default Videos;
