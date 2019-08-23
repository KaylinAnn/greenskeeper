import React, { useState, useEffect } from 'react'
import Temp from '../temp/temp'
import './dashboard.css'

function Dashboard() {

  const [humidity, setHumidity] = useState(35)

  // useEffect(() => {

  // })



  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <div className='temp-and-humidity-container'>
          <div className='humidity-container'>
            <div className='humidity'>{humidity}%</div>
            <div className='humidity-label'>HUMIDITY</div>
          </div>
          <div className='temp'><Temp /></div>
        </div>
        <div className='plant-moisture-container'>

        </div>
      </div>
    </div>
  )
}

export default Dashboard