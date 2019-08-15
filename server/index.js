const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sensor = require('i2c-seesaw-moisture-sensor')

app.use(bodyParser.json());


let client = sensor.open(0x36)

client.getTemperature()
  .then((temp) => {
    let tempF = Math.round((temp * 9 / 5) + 32)
    console.log(tempF);

  })
  .then(() => {
    return client.getMoisture()
  })
  .then(console.log)


app.get('/', (req, res) => {
  res.send('endpoint live')
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));