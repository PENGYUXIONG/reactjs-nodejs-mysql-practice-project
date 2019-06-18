// this is endpoints api file, check link before perform any modifications
router = require('express').Router();
bodyParser = require('body-parser');
router.use(bodyParser.json());

//import exceptions
generalError = require('../Exceptions/generalError');
// import services from the other files
userServices = require('../Services/userServices');

// endpoints apis start

router.post('/login', (req, res)=>{
    console.log(req.body, 'login');
    userServices.checkUser(req.body['userName'], req.body['passWord'], function(err, userExistBoolean){
        if (err) throw new generalError;
        else{
            console.log(userExistBoolean);
            res.send(userExistBoolean);
        }
    });
});

router.get('/signup', (req, res)=> {
    console.log(req.body);
    userServices.saveUser(req.body['userName'], req.body['passWord']);
});

module.exports = router;
