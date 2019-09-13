import React, { useState, useEffect } from 'react'
import './moisture.css'
import Axios from 'axios';


function Moisture() {

  const [moisture, setMoisture] = useState([])

  let jsonDate = (new Date()).toJSON()

  useEffect(() => {
    setMoistureState()
  })

  function setMoistureState() {
    Axios.get('/api/moisture')
      .then((res) => {
        let todaysMoistures = []
        res.data.map(moisture => {
          if (moisture.date.split('T')[0] === jsonDate.split('T')[0]) {
            todaysMoistures.push(moisture.value)
          }
        })
        let sum = todaysMoistures.reduce((acc, c) => acc + c, 0)
        let avgMoisture = Math.round(sum / todaysMoistures.length)
        console.log(avgMoisture);

        setMoisture(avgMoisture)
      })
  }

  function moistureDialClassName() {
    if (moisture > 600) {
      return 'one'
    } else if (moisture < 600 && moisture > 500) {
      return 'two'
    }
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