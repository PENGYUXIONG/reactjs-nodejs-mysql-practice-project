router = require('express').Router();

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
