import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PeopleIcon from '@material-ui/icons/People';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import { selectuser } from './features/userSlice';
import {useSelector} from "react-redux"

import "./Post.css"
const Post = () => {
  const num=0;
  const user =useSelector(selectuser)
  const [show,setShow]=useState(false);
  const [count,setCount]=useState(num);
  const sendLike =()=>{
    setShow(!show)
    if(show){
      setCount(num+1)
    }else{
      setCount(num) 
    }
    console.log(count)
    
  }
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__top--left">
        <Avatar src={user.photo}/>
      <div className="post__left--info">
      <h3>{user.displayName}</h3>
      <div className="post__left--detail">
      <p>timestamp</p>
      <PeopleIcon/>
      </div>
      </div>
        </div>
        <div className="post__top--right">
          <IconButton>
          <MoreHorizIcon/>

          </IconButton>
        </div>
   
      </div>
      <div className="post__middle">
    <p>Mark Zuckerberg </p>
      </div>
      <div className="post__bottom">
    <img className="post__bottom--logo" src="https://tse2.mm.bing.net/th?id=OIP.sDqQIopRg_25qqBqe47a_wHaEK&pid=Api&P=0&w=323&h=182"alt=""/>
      </div>
      <div className="post__detail">
        <div onClick={sendLike} className={`post__detail--option ${show && "post__color"}`}>
          <ThumbUpAltIcon/>
          <p>Like</p>
        </div>
        <div className="post__detail--option">
          <ChatBubbleOutlineIcon/>
          <p>Comment</p>
        </div>
        <div className="post__detail--option">
          <ShareIcon/>
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
