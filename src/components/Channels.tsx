import React from "react";
import {IChannelElement} from "../type/IChannels"

type channelProp = {
  channels: IChannelElement[],
  setChannels:  React.Dispatch<React.SetStateAction<IChannelElement[]>>
}

const Channels = (prop: channelProp) => {
  const toggleCheck = (ch: IChannelElement) => {
    const changed = prop.channels.map(mapped => {
      if(mapped.channel.ChannelID == ch.channel.ChannelID) {
        mapped.selected = !mapped.selected;
      }
      return mapped;
    });
    console.log(changed);
    prop.setChannels(changed);
  }
  return (
    <div>
      {prop.channels.map((channel) => {
        const ch = channel.channel;
        const val = channel.selected;
        return (
          <div key={ch.ChannelID} className="column">
            <input type="checkbox" onClick={() => toggleCheck(channel)}/>
            <label>{ch.Title}</label>
          </div>
        )
      })}
    </div>
  )
}
export default Channels;