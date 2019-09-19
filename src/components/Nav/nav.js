import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {



  return (
    <div className='banner-container sticky'>
      <Link className='banner-label cursor' to='/'>Plant Dashboard</Link>
      <div className='menu-container'>
        <Link to='/more' className='more-button cursor'></Link>
        <Link to='/' className='dashboard-button cursor'></Link>
      </div>
    </div>
  )
}

export default Nav