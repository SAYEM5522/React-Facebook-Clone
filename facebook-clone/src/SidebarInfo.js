import React from 'react'
import "./SidebarInfo.css"
const SidebarInfo = ({src,title,Icon}) => {
  return (
    <div className='sidebarinfo'>
    <div className="sidebarinfo__detail">
      {
        src? <img className="sidebarinfo__logo" src={src} alt=""/>:<Icon/>
      }
      <p>{title}</p>
    </div>
    </div>
  )
}

export default SidebarInfo
