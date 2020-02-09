import './App.css';
import Channels from './components/Channels';
import React, { useState, useEffect } from "react";
import {IChannel, IChannelElement} from "./type/IChannels"
import { http } from "./common/ApiUtils";

const App = () => {
  const [channels, setChannels] = useState<IChannelElement[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<IChannel[]>([]);
  useEffect(() => {
    const requestInfo: RequestInfo = "http://localhost:1323/channels";
    const data = http<IChannel[]>(requestInfo);
    data.then((res) => {
      setChannels(res.map(ch => {
        const channel: IChannelElement = {channel: ch, selected: false};
        return channel;
      })
    )});
  }, []);
  return (
    <Channels channels={channels} setChannels={setChannels}/>
  );
}

export default App;