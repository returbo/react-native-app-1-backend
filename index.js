const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const db = require('./core/db')
const { PatientCtrl } = require('./controllers')


const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/patients', PatientCtrl.all)
app.post('/patients', PatientCtrl.create)




app.listen(PORT, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log(`Сервер запущен на порту ${PORT}...`)
})