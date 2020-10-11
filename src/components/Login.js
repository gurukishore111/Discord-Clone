import { Button } from '@material-ui/core'
import React from 'react';
import logo from "../img/logo.png";
import { auth ,provider } from './config';
import './Login.css';

function Login() {
    const signIn =() =>{
        auth.signInWithPopup(provider).catch(err =>alert(err.message)) 
    }
    return (
        <div className="login">
           <div className="login_logo">
             <img src={logo} alt="logo"/>
           </div>

           <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
