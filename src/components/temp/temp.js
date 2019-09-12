import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './temps.css'

function Temp() {
  const [avrgDayTemp, setTemp] = useState('')
  const [avrgHourTemp, setHrTemp] = useState('')
  const [toggleTemps, setToggle] = useState(false)
  var jsonDate = (new Date()).toJSON();

  useEffect(() => {
    getFullDayAvrgTemp()
    getCurrHourAvrgTemp()

  })

  function getFullDayAvrgTemp() {
    let date = jsonDate.split('T')[0]
    let startDay = date + 'T00:00:00.000Z'
    let endDay = date + 'T23:59:59.999Z'

    console.log(startDay, endDay);


    axios.post('/api/alltemps', { startDay, endDay })

      .then((res) => {
        let allTemps = []
        res.data.map(temp => {
          if (temp.value < 125) {
            return allTemps.push(temp.value)
          }
        })
        let sum = allTemps.reduce((acc, c) => acc + c, 0)
        let avrg = Math.round(sum / allTemps.length)
        setTemp(avrg)
      })
      .catch(err => {
        console.log(err);
      })
  }

  function getCurrHourAvrgTemp() {
    let date = jsonDate.split(':')[0]
    let startDay = date + ':00:00.000Z'
    let endDay = date + ':59:59.999Z'

    axios.post('/api/alltemps', { startDay, endDay })
      .then((res) => {
        let allTemps = []
        res.data.map(temp => {
          if (temp.value < 125) {
            return allTemps.push(temp.value)
          }
        })
        let sum = allTemps.reduce((acc, c) => acc + c, 0)
        let avrg = Math.round(sum / allTemps.length)
        console.log(allTemps);


        setHrTemp(avrg)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <div className="onoffswitch">
        <input onClick={toggleTemps === true ? () => setToggle(false) : () => setToggle(true)} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
      <div>
        {toggleTemps === false ? <div> {avrgDayTemp}&deg;F</div> : <div> {avrgHourTemp}&deg;F</div>}
      </div>
      {/* <div>
        {toggleTemps === false ? <div> current</div> : <div> today's avg</div>}
      </div> */}
    </div>
  )
}

export default Temp