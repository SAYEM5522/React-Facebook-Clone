import React from 'react'
import Story from './Story'
import "./StoryRells.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { selectuser } from './features/userSlice';
import {useSelector} from "react-redux"

const StoryRells = () => {
  const user =useSelector(selectuser)

  return (
    <div className="storyrells">
      <div className="storyrells__detail">
     
      <Story
         profile={user.photo}
         Icon={AddCircleIcon}
         title1="Create a story "/>
    
     
       <Story img="https://tse3.mm.bing.net/th?id=OIP.iJxCHlkPhoNmKJ4RQaZTrgHaFj&pid=Api&P=0&w=220&h=166"
    src="https://tse1.mm.bing.net/th?id=OIP.ODtYbkk3WzGrbmItNZAZgwHaHa&pid=Api&P=0&w=300&h=300" 
    title="mark zuckerberg"/>

 
<Story img="https://tse3.mm.bing.net/th?id=OIP.PNKiulGRinm76TIwLs6-ogHaEK&pid=Api&P=0&w=288&h=163"
    src="https://tse3.mm.bing.net/th?id=OIP.DEAQfOv8g8z-Ws8OQZv9hQHaE8&pid=Api&P=0&w=241&h=162"
     title="elon musk"/>

<Story img="https://tse1.mm.bing.net/th?id=OIP.ALTqnlQZ_5MXVt6Zfv6oRQHaEH&pid=Api&P=0&w=339&h=189"
    src="https://tse4.mm.bing.net/th?id=OIP.-FKx5bwn2t-rMwQN4pa9kgHaD2&pid=Api&P=0&w=300&h=157" 
    title="jeff bezos"/>


<Story img="https://tse4.mm.bing.net/th?id=OIP.u_egndEULEyUrwWXY5uGNwHaFj&pid=Api&P=0&w=263&h=198"
    src="https://tse4.mm.bing.net/th?id=OIP.zJQXvfl_orCrpwqTmREDcwHaEK&pid=Api&P=0&w=304&h=172"
     title="ByteDance"/>

    
     </div>

    </div>
  )
}

export default StoryRells
