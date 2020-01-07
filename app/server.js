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
    socket.on('user-join', (roomObject) => {
        const room = roomObject.roomName;
        const curUser = roomObject.userName;
        
        console.log(`${roomObject.userName} joined ${roomObject.roomName}`)
        socket.join(roomObject.roomName);

        socket.in(room).broadcast.emit('new-user', roomObject.userName);

        socket.in(room).on('user-chat-message', message => {
            console.log(message, room)
            socket.in(room).broadcast.emit('chat-message', message);
        })

        socket.in(room).on('disconnect', function(){
            console.log(`${curUser} disconnected from ${room}`);
            socket.in(room).broadcast.emit('user-left', curUser);
            socket.leave(socket.room);
          });
    })
    

});

