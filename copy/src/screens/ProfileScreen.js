import './ProfileScreen.css'
import React from 'react'
import { selectUser } from '../features/userSlice'
import {  useSelector } from 'react-redux'
import Nav from '../Nav'
import { auth } from '../firebase'
export default function ProfileScreen() {
    const user = useSelector(selectUser)
    
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_body_info'>
          <img src='../../images/avatar.png' alt=''/>
          <div className='profileScreen_body_plan_details'>
            <h1>{user.email}</h1>
            <div className='profileScreen_plans'>
              <h3>Plans</h3>
              <small>Comming Soon...</small>
              <button className='signOut' onClick={()=> auth.signOut()}>Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}