import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase"
const Login = () => {
  const SignIn=()=>{
    auth.signInWithPopup(provider).catch((error)=>alert(error.message))

  }
  return (
    <div className="login">
     <div className="login__logo">
       <img className="login__logo1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
       <img  src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
     </div>
     <Button onClick={SignIn}>Sign In </Button>
    </div>
  )
}

export default Login
