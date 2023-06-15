import React , {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import {  signOut } from "firebase/auth";

const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div> <div className='navbar'>
    <span className="logo">Conversa</span>
    <div className="user">
      <img src={currentUser.photoURL} alt="" />
      <span>{currentUser.displayName}</span>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  </div></div>
  )
}

export default Navbar