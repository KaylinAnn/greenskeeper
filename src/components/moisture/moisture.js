import React, { useState, useEffect } from 'react'
import './moisture.css'
import Axios from 'axios';


function Moisture() {

  const [moisture, setMoisture] = useState([])

  useEffect(() => {
    setMoistureState()
  })

  function setMoistureState() {
    Axios.get('/api/moisture')
      .then((res) => {
        console.log(res.data[res.data.length + 1]);

      })
  }

  const plants = [{ name: 'Spider Plant', img: 'https://res.cloudinary.com/dclawygaw/image/upload/v1566857919/022-botanic.png' }, { name: 'Gold Dust', img: 'https://res.cloudinary.com/dclawygaw/image/upload/v1566857920/005-basil.png' }, { name: 'Cactus', img: 'https://res.cloudinary.com/dclawygaw/image/upload/v1566857920/011-botanic.png' }, { name: 'Monstara', img: 'https://res.cloudinary.com/dclawygaw/image/upload/v1566857921/033-botanic.png' }, { name: 'Peace Lily', img: 'https://res.cloudinary.com/dclawygaw/image/upload/v1566857920/004-anthurium.png' }]


  const allPlants = plants.map(plant => {
    return (
      <div className='one-moisture' key={plant.name}>
        <div className='icon-container'>
          <img className='plant-icon' src={plant.img} alt="plant icon" />
        </div>
        <div className='plant-title-container'>
          <div className='mapped-plants'>
            |
          </div>
          <div className='plant-name'>{plant.name}</div>
        </div>
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