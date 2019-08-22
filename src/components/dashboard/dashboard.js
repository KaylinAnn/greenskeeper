import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Dashboard() {
  const [avrgDayTemp, setTemp] = useState('')
  const [avrgHourTemp, setHrTemp] = useState('')
  const [toggleTemps, setToggle] = useState(true)
  var jsonDate = (new Date()).toJSON();

  useEffect(() => {
    getFullDayAvrgTemp()
    getCurrHourAvrgTemp()
  })

  function getFullDayAvrgTemp() {
    let date = jsonDate.split('T')[0]
    let startDay = date + 'T00:00:00.000Z'
    let endDay = date + 'T23:59:59.999Z'

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
        setHrTemp(avrg)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <div>
        {toggleTemps === true ? <div> {`Today's average Temp is ` + avrgDayTemp + 'F'}</div> : <div> {`Hourly average Temp is ` + avrgHourTemp + 'F'}</div>}
      </div>
      <button onClick={toggleTemps === true ? () => setToggle(false) : () => setToggle(true)}>toggle</button>
    </div>
  )
}

export default Dashboard