router = require('express').Router();

const initDb = require('../Db/initDb');

// for each api call, make sure connect to database
router.all('/', [initDb]);

router.get('/login', (req, res)=>{
    res.send({
        status: 200,
        message: 'This is log in page',
    });
});

router.get('/signup', (req, res)=> {
    res.send({
        status: 200,
        message: 'This is sign up page',
    })
});

module.exports = router;