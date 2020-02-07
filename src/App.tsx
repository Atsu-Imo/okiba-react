import './App.css';
import Channels from './components/Channels';
import React, { useState, useEffect } from "react";
import IChannels from "./type/IChannels"
import { http } from "./common/ApiUtils";

const App = () => {
  const [channels, setChannels] = useState<IChannels[]>([]);
  useEffect(() => {
    const requestInfo: RequestInfo = "http://localhost:1323/channels";
    const data = http<IChannels[]>(requestInfo);
    data.then((res) => {
      setChannels(res.filter(ch => ch.Title != null));
    });
  }, []);
  return (
    <Channels channels={channels}/>
  );
}

export default App;