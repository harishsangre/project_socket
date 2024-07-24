const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const apiRoutes = require('./src/routes/apiRoutes')
const authRoutes = require('./src/routes/authRoutes');
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.json())

// app.use('/api', apiRoutes) 
app.use('/auth',authRoutes)
 
io.on('connect', (socket) => {
    console.log('user connected')

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chat message',(msg) =>{
        console.log('message ' + msg)
        io.emit('chat message',msg)
    })
})

app.use(express.static('public'))

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});