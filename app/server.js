const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 8008;
const router = require('./Routes/api')

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
