import React, { useState, useEffect } from 'react'
import Temp from '../temp/temp'
import Moisture from '../moisture/moisture'
import AddPlant from '../adminAddPlant/adminAddPlant'
import './dashboard.css'

function Dashboard() {

  const [humidity, setHumidity] = useState(35)
  const [addPlantToggle, setToggle] = useState(false)

  // useEffect(() => {

  // })

  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <div className='add-plant-container'>
          {addPlantToggle === false ?
            <div></div> :
            <AddPlant />
          }
          <button onClick={addPlantToggle === false ? () => setToggle(true) : () => setToggle(false)} className='add-plant-button'>{addPlantToggle === false ? '+' : 'x'}</button>
        </div>
        <div className='temp-and-humidity-container'>
          <div className='humidity-container'>
            <div className='humidity'>{humidity}%</div>
            <div className='humidity-label'>HUMIDITY</div>
          </div>
          <div className='temp'><Temp /></div>
        </div>
        <div className='plant-moisture-container'>
          <div className='moisture-label'>MOISTURE</div>
          <div className='moisture-container'><Moisture /></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard