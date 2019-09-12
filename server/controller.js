module.exports = {
  readAllTemps: (req, res) => {
    const db = req.app.get('db')


    db.get_daily_temps([req.body.startDay, req.body.endDay])
      .then((temps) => {
        res.status(200).send(temps)
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('error')
      })
  },

  readMoisture: (req, res) => {
    const db = req.app.get('db')

    db.get_moisture()
      .then((moisture) => {
        res.status(200).send(moisture)
      })
      .catch(err => {
        console.log(err);
        res.send(500).send('error')

      })
  }

}