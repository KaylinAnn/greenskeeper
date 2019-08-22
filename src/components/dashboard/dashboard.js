import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Dashboard() {
  const [avrgTemp, setTemp] = useState('')

  useEffect(() => {
    getFullDayAvrgTemp()
  })

  function getFullDayAvrgTemp() {
    var jsonDate = (new Date('August 21, 2019 23:15:30 UTC')).toJSON();
    console.log(jsonDate);
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
        console.log(allTemps);
        let sum = allTemps.reduce((acc, c) => acc + c, 0)
        let avrg = Math.round(sum / allTemps.length)
        setTemp(avrg)
        console.log(avrg);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <div>
        {`Today's average Temp is ` + avrgTemp + 'F'}
      </div>
    </div>
  )
}

export default Dashboard