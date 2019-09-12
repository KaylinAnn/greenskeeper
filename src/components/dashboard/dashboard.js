import React, { useState, useEffect } from 'react'
import Temp from '../temp/temp'
import Moisture from '../moisture/moisture'
import AddPlant from '../adminAddPlant/adminAddPlant'
import './dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {

  const [humidity, setHumidity] = useState(35)
  const [addPlantToggle, setToggle] = useState(false)



  return (
    <div className='dashboard'>
      <div className='banner-container'>
        <Link className='banner-label cursor' to='/'>Plant Dashboard</Link>
        <div className='menu-container'>
          <Link to='/more' className='more-button cursor'></Link>
          <Link to='/' className='dashboard-button cursor'></Link>
        </div>
      </div>
      <div className='body-container'>
        <div className='temp-and-humidity-container'>
          <div className='humidity-container'>
            <div className='humidity'>{humidity}%</div>
            <div className='humidity-label'>HUMIDITY</div>
          </div>
          <div className='temp'><Temp /></div>
        </div>
        <div className='moisture-contaianer'>
          <div className='moisture-label-and-add-container'>
            <div className='moisture-label'>MOISTURE</div>
            <div className='add-plant-container'>
              {addPlantToggle === false ?
                <div></div> :
                <AddPlant />
              }
              <button onClick={addPlantToggle === false ? () => setToggle(true) : () => setToggle(false)} className='add-plant-button'>{addPlantToggle === false ? '+' : 'x'}</button>
            </div>
          </div>
          <div className='moisture-graphs-container'>
            <Moisture />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard