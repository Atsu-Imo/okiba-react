import React, { useState, useEffect } from "react";
import IChannels from "../type/IChannels"

type RequestInfo  = {
  url :string;
};

async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request.url);
  const body = await response.json();
  return body;
}

const Channels = () => {
  const [channels, setChannels] = useState<IChannels[]>([]);
  let channelsList: IChannels[];
  useEffect(() => {
    const requestInfo: RequestInfo =  {
      url: "http://localhost:1323/channels"
    };
    const data = http<IChannels[]>(requestInfo);
    data.then((res) => {
      channelsList =  res.filter(ch => ch.Title != null);
      setChannels(channelsList);
    });
  }, []);
  return <ul>{channels.map(ch => <li>{ch.Title}</li>)}</ul>;
};
export default Channels;