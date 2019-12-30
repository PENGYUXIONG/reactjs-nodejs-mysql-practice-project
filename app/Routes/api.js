// this is endpoints api file, check link before perform any modifications
router = require('express').Router();
path = require('path');
bodyParser = require('body-parser');
bcryptjs = require('bcryptjs');
router.use(bodyParser.json());

//import exceptions
generalError = require('../Exceptions/generalError');
// import services from the other files
userController = require('../Controller/userController');


// endpoints apis start

router.post('/login', async(req, res)=>{
    console.log(req.body, 'login');
    userController.checkUser(req.body['userName'], req.body['passWord'], function(err, userExistBoolean){
        if (err) throw new generalError('internal error code 500');
        else{
            console.log(userExistBoolean);
            res.send(userExistBoolean);
        }
    });
});

router.post('/signup', async(req, res)=> {
    console.log(req.body, "signup");
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body['passWord'], salt);
    console.log(hashedPassword)
    userController.saveUser(req.body['userName'], hashedPassword, req.body['email'], function(err, UserNotExistBoolean, EmailNotExistBoolean){
        if (err) throw new generalError('internal error code 500');
        else{
            console.log(UserNotExistBoolean, EmailNotExistBoolean);
            res.send([UserNotExistBoolean, EmailNotExistBoolean]);
        }
    });
});

module.exports = router;
