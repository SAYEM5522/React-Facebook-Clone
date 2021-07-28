import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"
const Story = ({img,src,title,profile,Icon ,title1}) => {
  return (
    <div  className="story" style={{backgroundImage:`url(${profile ? profile: img})`}}>
      {
        Icon? <Icon className="stoty__icon" style={{color:"white"}}/>:<Avatar className="story__avatar" src={src}/>
      }
      
    {
      title1?<div className="story__title"><h4>{title1}</h4></div>:<h5>{title}</h5>
    }
    </div>
  )
}

export default Story
