import React from "react";
import {IChannelElement, IChannel} from "../type/IChannels"
import _ from 'underscore';

type channelProp = {
  channels: IChannel[],
  setChannels:  React.Dispatch<React.SetStateAction<IChannel[]>>,
  selectedChannels: IChannel[],
  setSelectedChannels:  React.Dispatch<React.SetStateAction<IChannel[]>>
}

const Channels = (prop: channelProp) => {
  // 絶対に違う
  const toggleCheck = (ch: IChannel) => {
    const selected = _.pluck(prop.selectedChannels, "ChannelID");
    let newSelected: String[] = [];
    if(selected.includes(ch.ChannelID)) {
      newSelected = selected.filter(s => s != ch.ChannelID);
    } else {
      newSelected = selected;
      newSelected.push(ch.ChannelID);
    }
    const changed = prop.channels.filter(ch => {
      return newSelected.includes(ch.ChannelID);
    });
    prop.setSelectedChannels(changed);
  };
  return (
    <div>
      {prop.channels.map((channel) => {
        return (
          <div key={channel.ChannelID} className="column">
            <input type="checkbox" onClick={() => toggleCheck(channel)}/>
            <label>{channel.Title}</label>
          </div>
        )
      })}
    </div>
  )
}
export default Channels;