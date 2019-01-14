const express = require('express');
const app = express();

const port = process.env.port || 8000;
const path = require('path');
const router = require('./Routes/api')

app.use(express.static('../../front-end/build'));

app.use('/', router);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '../../front-end//src/index.html'))
});

app.listen(port, ()=>{
    console.log("server has port number of : " + port)
});