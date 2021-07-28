import React from 'react'
import "./Room.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
const Room = () => {
  return (
    <div className="room">
     <div className="room__top">
      <div className="room__top--left">
      <VideoCallIcon className="room__icon"/>
    
      <h3>Rooms .</h3>
      <p>Video chat with friends</p>
      <InfoIcon style={{fontSize:"17px",color:"gray"}}/>
      </div>
      <div className="room__top--right">
        <p>Create room</p>
      </div>
     </div>
     <div className="room__bottom">
    <Avatar className="room__avatar" src="https://tse3.mm.bing.net/th?id=OIP.iJxCHlkPhoNmKJ4RQaZTrgHaFj&pid=Api&P=0&w=220&h=166"/>
    <Avatar className="room__avatar"  src="https://tse3.mm.bing.net/th?id=OIP.PNKiulGRinm76TIwLs6-ogHaEK&pid=Api&P=0&w=288&h=163"/>
    <Avatar className="room__avatar" src="https://tse1.mm.bing.net/th?id=OIP.ALTqnlQZ_5MXVt6Zfv6oRQHaEH&pid=Api&P=0&w=339&h=189"/>
    <Avatar className="room__avatar" src="https://tse4.mm.bing.net/th?id=OIP.u_egndEULEyUrwWXY5uGNwHaFj&pid=Api&P=0&w=263&h=198"/>
    <Avatar className="room__avatar" src="https://tse4.mm.bing.net/th?id=OIP.u_egndEULEyUrwWXY5uGNwHaFj&pid=Api&P=0&w=263&h=198"/>
    <Avatar className="room__avatar" src="https://tse3.mm.bing.net/th?id=OIP.PNKiulGRinm76TIwLs6-ogHaEK&pid=Api&P=0&w=288&h=163"/>
    <Avatar className="room__avatar" src="https://tse3.mm.bing.net/th?id=OIP.iJxCHlkPhoNmKJ4RQaZTrgHaFj&pid=Api&P=0&w=220&h=166"/>
    <Avatar className="room__avatar" src="https://tse1.mm.bing.net/th?id=OIP.ALTqnlQZ_5MXVt6Zfv6oRQHaEH&pid=Api&P=0&w=339&h=189"/>
    <Avatar className="room__avatar" src="https://tse3.mm.bing.net/th?id=OIP.PNKiulGRinm76TIwLs6-ogHaEK&pid=Api&P=0&w=288&h=163"/>
     </div>
    </div>
  )
}

export default Room
