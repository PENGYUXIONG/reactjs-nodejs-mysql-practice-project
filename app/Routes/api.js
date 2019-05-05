// this is endpoints api file, check link before perform any modifications
router = require('express').Router();
bodyParser = require('body-parser');
router.use(bodyParser.json());

// import services from the other files
userServices = require('../Services/userServices');

// endpoints apis start

router.post('/login', (req, res)=>{
    console.log(req.body);
    userServices.saveUser(req.body['userName'], req.body['passWord']);
});

router.get('/signup', (req, res)=> {
    res.send({
        status: 200,
        message: 'This is sign up page',
    });
});

module.exports = router;
