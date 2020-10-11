import React,{useState,useEffect} from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import  AddIcon  from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import db, { auth } from './config';
import { selectUser } from './../features/counter/userSlice';
import { selectChannelId, selectChannelName } from '../features/counter/appSlice';
import firebase from 'firebase'; 
import intro from "../img/intro.gif"

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [input, setinput] = useState("");
  const [messages, setmessage] = useState([]);

  useEffect(() =>{
    if(channelId){
   db.collection('channels')
   .doc(channelId)
   .collection('messages')
   .orderBy('timestamp','desc')
   .onSnapshot((snapshot) =>
     setmessage(snapshot.docs.map(doc =>doc.data()))
   )}
  },[channelId])

  const sendMessage = e =>{
    e.preventDefault();
    db.collection('channels')
    .doc(channelId)
    .collection('messages')
    .add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:input,
      user:user,
    })
    setinput('')
  }
  //console.log(messages);

    return (
        <div className="chat">
           {channelName &&  <ChatHeader channelName={channelName} />}
             {!channelId && <div style={{marginTop:"12px"}}>
              <h1 style={{color:"white",textAlign:"center"}}>Welcome to Discord Clone😍</h1>

               <img src={intro} style={{display: "block",
               marginTop:"12px",
                marginLeft: "auto",
                marginRight:"auto",
                width: "40%"}}/>
               </div>}
             <div className="chat_message">
               {messages.map(message =>(
                 <Message 
                 timestamp={message.timestamp}
                 message={message.message}
                 user={message.user}
                 />
               ))}
             </div>
             <div className="chat_input">
          <AddIcon fontSize="large" />
          <form>
            <input value={input} onChange={e =>setinput(e.target.value)} disabled={!channelId} placeholder={`${channelName === null ? `Choose room to chat` :`Message ${channelName}`}`}/>
            <button className="chat_inputButton" type="submit" onClick={sendMessage} >Send Message</button>
          </form>
          <div className="chat_inputIcons">
            <CardGiftcardIcon fontSize="large"/>
            <GifIcon fontSize="large"/>
            <EmojiEmotionsIcon fontSize="large"/>
          </div>
        </div>
        </div>
    )
}

export default Chat;
