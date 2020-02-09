import React from 'react';
import { IChannel } from '../type/IChannels';

type searchProp = {
    selected: IChannel[]
}

const Search = (prop: searchProp) => {
    return (
        <div>
            {prop.selected.map((channel) => {
                return (
                    <div>{channel.ChannelID}</div>
                )
            })}
        </div>
    )
}
export default Search;