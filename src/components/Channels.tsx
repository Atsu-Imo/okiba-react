import React from "react";
import IChannels from "../type/IChannels"

type channelProp = {
  channels: IChannels[]
}

const Channels = (prop: channelProp) => {
  return <ul>{prop.channels.map(ch => <li key={ch.ChannelID}>{ch.Title}</li>)}</ul>;
};
export default Channels;