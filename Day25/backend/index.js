const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
port = process.env.HOST_PORT || 3000

app.use(cors())
app.use(express.json())

const todoList = require('./todoList.js')
app.use('/api', todoList)

app.get('/', function (req, res) {
    res.send('Server is Running!')
})

http.createServer(app).listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
