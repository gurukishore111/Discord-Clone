import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import More from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import  SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import  CallIcon from '@material-ui/icons/Call';
import  InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import  {Avatar}  from '@material-ui/core';
import MicIcon from "@material-ui/icons/Mic";
import HeadSetIcon from "@material-ui/icons/Headset";
import SettingIcon from "@material-ui/icons/Settings"
import { useSelector } from 'react-redux';
import { selectUser } from './../features/counter/userSlice';
import db from './config';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setchannels] = useState([]);

    useEffect(() => {
       db.collection('channels').onSnapshot(snapshot =>(
           setchannels(snapshot.docs.map(doc =>({
               id:doc.id,
               channels:doc.data()
           })))
       ))
    }, [channels])

    const handleAddChannels = () =>{
        const channelName = prompt('Enter the channel name');

        if(channelName){
            db.collection('channels').add({
                channelName:channelName,
            })
        }
    }
    //console.log(channels);
    return (
        <div className="sidebar">
            <div className="sidebar_top">
              <h3>Dev Gk</h3>
              <More />
            </div>
            <div className="sidebar_channel">
                <div className="sidebar_channel_header">
                    <div className="sidebar_header">
                    <More />
                    <h4>Create Channels</h4>
                    </div>
              <AddIcon className="sidebar_addChannels" onClick={handleAddChannels}/>

                    </div>
                    <div className="sidebar_channelList">
                        {channels.map(({channels,id})=>(
                      <SidebarChannel key={id} id={id} channel={channels.channelName} />
                        ))}
                      </div>
                      </div> 

            <div className="sidebar_voice">
                <SignalCellularAltIcon className="sidebar_voiceicon" fontSize="large"/>
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceicons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>

            </div>

            <div className="sidebar_profile">
                <Avatar  src={user.photo} />
                <div className="sidebar_profileinfo">
                    <h3>{user.displayName}</h3>
                  <p>@{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar_profileIcons">
                 <MicIcon />
                 <HeadSetIcon />
                 <SettingIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
