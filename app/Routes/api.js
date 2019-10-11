// this is endpoints api file, check link before perform any modifications
router = require('express').Router();
bodyParser = require('body-parser');
router.use(bodyParser.json());

//import exceptions
generalError = require('../Exceptions/generalError');
// import services from the other files
userController = require('../Controller/userController');

// endpoints apis start

router.post('/login', (req, res, next)=>{
    console.log(req.body, 'login');
    userController.checkUser(req.body['userName'], req.body['passWord'], function(err, userExistBoolean){
        if (err) throw new generalError('internal error code 500');
        else{
            console.log(userExistBoolean);
            res.send(userExistBoolean);
        }
    });
    next();
});

router.post('/signup', (req, res)=> {
    console.log('sign up page!');
    res.send('sign up page!');
    // console.log(req.body);
    // userController.saveUser(req.body['userName'], req.body['passWord'], function(err, userSavedBoolean){
    //     if (err) throw new generalError('internal error code 500');
    //     else{
    //         console.log(userSavedBoolean);
    //         res.send(userSavedBoolean);
    //     }
    // });
});

module.exports = router;
