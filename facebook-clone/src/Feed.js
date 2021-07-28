import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryRells from './StoryRells'
import "./Feed.css"
import Room from './Room'
const Feed = () => {
  return (
    <div className="feed">
      <StoryRells/>
      <MessageSender/>
      <Room/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </div>
  )
}

export default Feed
