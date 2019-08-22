const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const massive = require('massive');
const controller = require('./controller')

const app = express();

app.use(bodyParser.json());

app.post('/api/alltemps', controller.readAllTemps)

const uri = process.env.CONNECTION_STRING
massive(uri)
  .then(db => {
    app.set('db', db)
    console.log(':) db')


  })
  .catch(err => {
    console.log('db error', err);

  })

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));