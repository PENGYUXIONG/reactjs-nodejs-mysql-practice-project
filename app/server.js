const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 8008;
const router = require('./Routes/api')
const io = require('socket.io')(3000);


app.use(cors());


app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../front-end/build')
    })
})

app.use('/', router);

app.listen(port, ()=>{
    console.log("server has port number of : " + port)
});



// socket io server

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('user-chat-message', message => {
        console.log(message)
        socket.broadcast.emit('chat-message', message);
    })
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
});

