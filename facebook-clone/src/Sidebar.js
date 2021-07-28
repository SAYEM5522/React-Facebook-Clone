import React from 'react'
import SidebarInfo from './SidebarInfo';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sideber = () => {
  return (
    <div className="sidebar">
     <SidebarInfo title="Md Sayem"
      src="https://scontent.fdac48-1.fna.fbcdn.net/v/t1.0-9/52300371_368912013690892_3010590637897547776_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF4qW-7ZNvYPyjp2BGAnEHTexv3E8WXV5t7G_cTxZdXm9gcK2AJQJWOyRLftrENtZIAMikjONdSotrYvFApBltw&_nc_ohc=KDxXu8HhcSYAX8DUrUz&_nc_ht=scontent.fdac48-1.fna&oh=1bb6c4b86d488e17c50212e5837ec3f8&oe=5FC46195"/>
    <SidebarInfo title="Covid-Information-Center" Icon={LocalHospitalIcon}/>
    <SidebarInfo title="Friends" Icon={PeopleIcon}/>
    <SidebarInfo title="Group" Icon={SupervisedUserCircleIcon}/>
    <SidebarInfo title="Videos" Icon={OndemandVideoIcon}/>
    <SidebarInfo title="See more" Icon={ExpandMoreIcon}/>
    <hr/>
    </div>
  )
}

export default Sideber
