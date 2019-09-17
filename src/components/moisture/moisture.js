import React, { useState, useEffect } from 'react'
import './moisture.css'
import Axios from 'axios';


function Moisture() {

  const [moisture, setMoisture] = useState()

  let jsonDate = (new Date()).toJSON()

  useEffect(() => {
    setMoistureState()
  })

  function setMoistureState() {
    Axios.get('/api/moisture')
      .then((res) => {

        let todaysMoistures = []
        res.data.forEach((moisture) => {
          if (moisture.date.split('T')[0] === '2019-09-18') {
            console.log(jsonDate.split('T')[0]);

            todaysMoistures.push(moisture.value)
          }
        })
        console.log(todaysMoistures);

        let sum = todaysMoistures.reduce((acc, c) => acc + c, 0)
        let avgMoisture = Math.round(sum / todaysMoistures.length)
        console.log(avgMoisture);

        setMoisture(avgMoisture)

      })
  }

  function moistureDialClassName() {
    if (moisture >= 500 && moisture < 550) {
      return 'one bar'
    } else if (moisture >= 550 && moisture < 600) {
      return 'two bar'
    } else if (moisture >= 600 && moisture < 650) {
      return 'three bar'
    } else if (moisture >= 650 && moisture < 700) {
      return 'four bar'
    } else if (moisture >= 700 && moisture < 750) {
      return 'five bar'
    } else if (moisture >= 750 && moisture < 800) {
      return 'six bar'
    } else if (moisture >= 800 && moisture < 850) {
      return 'seven bar'
    } else if (moisture >= 850 && moisture < 900) {
      return 'eight bar'
    } else if (moisture >= 900 && moisture < 950) {
      return 'nine bar'
    } else if (moisture >= 950 && moisture < 1000) {
      return 'ten bar'
    } else if (moisture >= 1000 && moisture < 1500) {
      return 'eleven bar'
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
            <h1 className={moistureDialClassName()}></h1>
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