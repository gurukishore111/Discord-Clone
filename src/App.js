import React,{useEffect} from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './components/Login';
import { auth } from './components/config';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
     auth.onAuthStateChanged((authuser) =>{
       //console.log('User is auth user',authuser);
       if(authuser){
          dispatch(login({
            uid:authuser.uid,
            photo:authuser.photoURL,
            email:authuser.email,
            displayName:authuser.displayName
          }))
       }else{
         //Logout
         dispatch(logout())
       }
     })
  }, [user,dispatch])

  return (
    <div className="app">
      {user ? ( 
      <>
      <Sidebar />
     <Chat/>
     </>
      ):(
      <Login />
      )}
     
    </div>
  );
}

export default App;
