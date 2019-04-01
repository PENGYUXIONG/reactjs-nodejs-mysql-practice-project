const express = require('express');
const app = express();
const port = 8008;
const path = require('path');
const router = require('./Routes/api')

app.use('/', router);

app.listen(port, ()=>{
    console.log("server has port number of : " + port)
});
