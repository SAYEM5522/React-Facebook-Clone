import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import {useSelector} from "react-redux"
import { selectuser } from './features/userSlice';

const MessageSender = () => {
  const user =useSelector(selectuser)

  const [input,setInput]=useState("");
  const [imageUrl,setImageUrl]=useState("")
  const handleSubmit=(e)=>{
      e.preventDefault()
      setInput(" ")
      setImageUrl(" ")
     
  }
  console.log(input)
  return (
    <div className="messagesender">
    <div className="messagesender__top">
    <Avatar src={user.photo}/>
    <form>
    <input placeholder={`whts on your mind ?, ${user.displayName}`}
    className="messagesender__input"
    onChange={(e)=>setInput(e.target.value)}
    />
    <button  type="submit" onClick={handleSubmit}>submit</button>
    </form>
  
    </div>
    <div className="messagesender__bottom">
    <div className="messagesender__option">
      <VideocamIcon style={{color:"red"}}/>
      <p>Live Video</p>
    </div>
    <div className="messagesender__option">
    <input type="file" id="file" hidden="hidden" className="messagesender__file" onChange={(e)=>setImageUrl(e.target.files[0])} />
    <label className="messagesender__option--file" for="file">
    <PhotoLibraryIcon style={{color:"green"}}/>
      <p>Photo/Video</p>
    </label>
     
    </div>
    <div className="messagesender__option">
      <SentimentVerySatisfiedIcon style={{color:"orange"}}/>
      <p>Felling/Activity</p>
    </div>
</div>

    </div>
  )
}

export default MessageSender
