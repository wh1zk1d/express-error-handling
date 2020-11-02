const express = require('express')
const app = express()

const PORT = 1234

const routes = require('./routes')

app.use(express.json())
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
