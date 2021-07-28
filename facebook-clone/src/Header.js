import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {  Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import { selectuser } from './features/userSlice';
import {useSelector} from "react-redux"
const Header = () => {
      const user =useSelector(selectuser)
  return (
    <div className="header">
    <div className="header__left">
      <Avatar className="header__logo" src={user.photo} alt=""/>
      <div className="header__input">
      <SearchIcon/>
      <input placeholder="Search Facebook" type="text"/>
      </div>
    </div>
    <div className="header__middle">
      <div className="header__option header--active">
      <HomeIcon fontSize="large"/>
      </div>
     
      <div className="header__option">
      <OndemandVideoIcon fontSize="large"/>
      </div>
     
      <div className="header__option">
      <SupervisedUserCircleIcon fontSize="large"/>

      </div>
      <div className="header__option">
      <AspectRatioIcon fontSize="large"/>
      </div>

    </div>
    <div className="header__right">
      <div className="header__info">
            <img className="header__image" src={user.photo} alt=""/>
            <h4>{user.displayName}</h4>
      </div>
                <IconButton>
          <AddIcon/>
                </IconButton>
                <IconButton>
          <ForumIcon/>
                </IconButton>
                <IconButton>
          <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
          <ExpandMoreIcon/>
                </IconButton>
    </div>
    </div>
  )
}

export default Header
