import React from 'react';
import { IChannel } from '../type/IChannels';
import _ from 'underscore';
import { http } from '../common/ApiUtils';
import Button from '@material-ui/core/Button';
import { IVideo } from '../type/IVideo';

type searchProp = {
    selected: IChannel[],
    setVideos:  React.Dispatch<React.SetStateAction<IVideo[]>>
}

const Search = (prop: searchProp) => {
    const handleSubmit = () => {
        const selectedIDs = _.pluck(prop.selected, "ChannelID");
        const channelQuery = selectedIDs.join(",");
        const requestInfo: RequestInfo = "http://localhost:1323/search?channel_id=" + channelQuery;
        const data = http<IVideo[]>(requestInfo);
        data.then(res => {
            prop.setVideos(
                res.map(videos => {
                    return videos;
                })
            )
        });
    };
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => handleSubmit()}>検索</Button>
        </div>
    )
}
export default Search;