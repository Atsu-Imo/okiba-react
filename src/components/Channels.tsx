import React, { useState, useEffect } from "react";
import IChannels from "../type/IChannels"
import { http } from "../common/ApiUtils";

const Channels = () => {
  const [channels, setChannels] = useState<IChannels[]>([]);
  let channelsList: IChannels[];
  useEffect(() => {
    const requestInfo: RequestInfo = "http://localhost:1323/channels";
    const data = http<IChannels[]>(requestInfo);
    data.then((res) => {
      channelsList =  res.filter(ch => ch.Title != null);
      setChannels(channelsList);
    });
  }, []);
  return <ul>{channels.map(ch => <li>{ch.Title}</li>)}</ul>;
};
export default Channels;