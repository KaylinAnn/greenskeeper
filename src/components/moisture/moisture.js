import React, { useState, useEffect } from 'react'
import './moisture.css'

function Moisture() {

  // const [] = useState()

  // useEffect(() => {

  // })
  const arr = ['Spider Plant', 'Gold Dust', 'Cactus', 'blahblah', 'someplant']

  const allPlants = arr.map(plant => {
    return (
      <div className='moisture'>
        <div className='mapped-plants'>
          |
        </div>
        <div className='plant-name'>{plant}</div>
      </div>
    )
  })

  return (
    <div className='moisture'>
      {allPlants}
    </div>
  )
}

export default Moisture