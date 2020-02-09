import './App.css';
import Channels from './components/Channels';
import Search from './components/Search'
import React, { useState, useEffect } from "react";
import {IChannel} from "./type/IChannels"
import { http } from "./common/ApiUtils";

const App = () => {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<IChannel[]>([]);
  useEffect(() => {
    const requestInfo: RequestInfo = "http://localhost:1323/channels";
    const data = http<IChannel[]>(requestInfo);
    data.then((res) => {
      setChannels(res.map(ch => {
        return ch;
      })
    )});
  }, []);
  return (
    <div>
      <Channels 
          channels={channels} setChannels={setChannels}
          selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels}/>
    <Search selected={selectedChannels}/>
    </div>
  );
}

export default App;