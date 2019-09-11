import React, { useState, useEffect } from 'react'
import './adminAddPlant.css'

function AdminAddPlant() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  function handleOnSubmit() {
    if (username === '' && password === '') {
      return alert('Please enter username and password.')
    } else if (username === 'Admin' && password === 'password') {
      console.log('SignedIn!');
    } else {
      return alert('Incorrect Username and Password.')
    }

  }



  return (
    <div className='addPlant-container'>
      <div className='admin-title'>Admin SignIn</div>
      <div className='username-container'>
        <div className='username-title'>Username:</div>
        <input placeholder='username' type="text" onChange={(e) => {
          setUsername(e.target.value)
        }} />
      </div>
      <div className='password-container'>
        <div className='password-title'>Password:</div>
        <input placeholder='password' type="text" onChange={(e) => {
          setPassword(e.target.value)
        }} />
      </div>
      <button className='submit-button' onClick={() => handleOnSubmit()}>Sign In</button>
    </div>
  )
}

export default AdminAddPlant