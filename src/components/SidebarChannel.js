import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/counter/appSlice';

function SidebarChannel({id,channel}) {
    const dispatch = useDispatch();

    return (
        <div className="sidebar_channel" onClick={() =>dispatch(setChannelInfo({
            channelId:id,
            channelName:channel
        }))}>
            <h4><span className="sidebarChannel_hash">#</span>{channel}</h4>
        </div>
    )
}

export default SidebarChannel
