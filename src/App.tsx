import "./App.css";
import Channels from "./components/Channels";
import Search from "./components/Search";
import Videos from "./components/Videos";
import React, { useState, useEffect } from "react";
import { IChannel } from "./type/IChannels";
import { http } from "./common/ApiUtils";
import Grid from "@material-ui/core/Grid";
import { IVideo } from "./type/IVideo";

const App = () => {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<IChannel[]>([]);
  const [videos, setVideos] = useState<IVideo[]>([]);
  useEffect(() => {
    const requestInfo: RequestInfo = "http://localhost:1323/channels";
    const data = http<IChannel[]>(requestInfo);
    data.then(res => {
      setChannels(
        res.map(ch => {
          return ch;
        })
      );
    });
  }, []);
  return (
    <div className="main">
      <Grid container spacing={2}>
        <Grid item xs>
          <Channels
            channels={channels}
            setChannels={setChannels}
            selectedChannels={selectedChannels}
            setSelectedChannels={setSelectedChannels}
          />
          <Search selected={selectedChannels} setVideos={setVideos}/>
        </Grid>
        <Grid item xs>
          <Videos videos={videos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
