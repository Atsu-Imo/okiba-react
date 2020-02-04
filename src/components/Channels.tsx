import React, { useState } from "react";

const Channels = () => {
  const [channels, setChannels] = useState<any>([]);
  const f = async() => {
    const response = await fetch("http://localhost:1323/channels", {
      mode: "cors"
    });
    const json = await response.json;
    return json;
  }
  let chan;
  f().then(data => {
    chan = JSON.stringify(data);
  });
  setChannels(chan);

  return <div>{channels}</div>;
};
export default Channels;