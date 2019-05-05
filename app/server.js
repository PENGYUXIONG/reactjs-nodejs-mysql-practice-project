const express = require('express');
const app = express();
const cors = require('cors');
const port = 8008;
const router = require('./Routes/api')

app.use(cors());
app.use('/', router);

app.listen(port, ()=>{
    console.log("server has port number of : " + port)
});
