import React from 'react';
import { IChannel } from '../type/IChannels';
import _ from 'underscore';
import { http } from '../common/ApiUtils';

type searchProp = {
    selected: IChannel[]
}

const Search = (prop: searchProp) => {
    const handleSubmit = () => {
        const selectedIDs = _.pluck(prop.selected, "ChannelID");
        const channelQuery = selectedIDs.join(",");
        const requestInfo: RequestInfo = "http://localhost:1323/search?channel_id=" + channelQuery;
        const data = http<any>(requestInfo);
        data.then(res => {
            console.log(res)
        });
    };
    return (
        <div>
            <button onClick={() => handleSubmit()}>検索</button>
        </div>
    )
}
export default Search;