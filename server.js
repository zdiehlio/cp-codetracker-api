const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Home Route')
})

app.use('*', (req, res) => {
  res.send('Something Broke')
})

app.listen(PORT, () => console.log(`Server is now running on ${PORT}`))
