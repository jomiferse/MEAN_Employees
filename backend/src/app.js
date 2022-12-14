const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// environment variables
app.set('port',process.env.PORT || 4000)

app.use(cors()) //{origin: "http://192.168.1.87:4200"}
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/employees',require('./routes/employees.routes'))

module.exports = app;