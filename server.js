const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mongoUrl = `mongodb://zachd:chimaera1@ds213832.mlab.com:13832/codetracker-test`

const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('DB connection open!'))

app.use(cors())

app.post('/signup', (req, res) => {
  console.log(req.email)
  res.send('Post is working')
})

app.get('/', (req, res) => {
  res.send('Home Route')
})

app.use('*', (req, res) => {
  res.send('Something Broke')
})

app.listen(PORT, () => console.log(`Server is now running on ${PORT}`))
