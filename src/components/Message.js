import { Avatar } from '@material-ui/core';
import React from 'react'
import './Message.css';

function Message({timestamp,message,user}) {
    return (
        <div className="message">
         <Avatar src={user.photo}/>
           <div className="message_info">
               <h4>@ {user.displayName}
                     <span className="message_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
               </h4>
               <p>{message}</p>
           </div>
        </div>
    )
}

export default Message
