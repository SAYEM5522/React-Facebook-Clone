import React,{useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Widget from './Widget';
import Sidebar from "./Sidebar"
import Login from './Login';
import { auth } from './firebase';
import { login, selectuser } from './features/userSlice';
import { useDispatch,useSelector  } from 'react-redux';


function App() {
  const dispatch=useDispatch();
 const user=useSelector( selectuser);
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
        dispatch(
          login({
            uid: authuser.uid,
            displayName: authuser.displayName,
            email: authuser.email,
            photo: authuser.photoURL,
          })
        );
       
    });
    
  }, [dispatch]);
 

  return (
    <>
    {
      user?(
        <div className="app">
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
       </div>
      ):
      (
        <Login/>
      )
    }
    </>
  );
}

export default App;
