import  Notification from '@material-ui/icons/Notifications';
import  EditLocationRounded from '@material-ui/icons/EditLocationRounded';
import  PeopleAltRounded from '@material-ui/icons/PeopleAltRounded';
import SearchIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpIcon from "@material-ui/icons/HelpRounded";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'
import './ChatHeader.css'
import { auth } from './config';


function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
           <h3><span className="chatHeader_hash">#</span>{channelName}</h3>
            </div>
            <div className="chatHeader_right">
              <Notification />
              <EditLocationRounded/>
              <PeopleAltRounded/>
              <div className="chartHeder_search">
                  <input type="text" placeholder="Search"/>
                  <SearchIcon/>
              </div>
              <SendRoundedIcon />
              <ExitToAppIcon  onClick ={() =>auth.signOut()}/>

              <HelpIcon />
            </div>

        </div>
    )
}

export default ChatHeader
