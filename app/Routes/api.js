// this is endpoints api file, check link before perform any modifications
router = require('express').Router();
path = require('path');
bodyParser = require('body-parser');
bcryptjs = require('bcryptjs');
jwt = require('jsonwebtoken');
generalError = require('../Exceptions/generalError');
authorizeUser = require('./AuthorizeUser');

router.use(bodyParser.json());

//import exceptions
generalError = require('../Exceptions/generalError');
// import services from the other files
userController = require('../Controller/userController');


// endpoints apis start

router.post('/login', async(req, res)=>{
    console.log(req.body, 'login');
    
    await userController.checkUser(req.body['userName'], req.body['passWord'], async function(err, userInfo){
        if (err) throw new generalError('internal error code 500');
        else{
            const user = JSON.stringify(userInfo[2]);
            console.log(user)
            jwt.sign({user: user}, 'user-info', function(err, token){
                if (err) {
                    throw new generalError('unknown error occured, cannot generate token');
                } else{
                    res.json({
                        userInfo,
                        token
                    });
                }
            });
        }
    });
});

router.post('/signup', async(req, res)=> {
    console.log(req.body, "signup");
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body['passWord'], salt);
    userController.saveUser(req.body['userName'], hashedPassword, req.body['email'], function(err, UserNotExistBoolean, EmailNotExistBoolean){
        if (err) throw new generalError('internal error code 500');
        else{
            console.log(UserNotExistBoolean, EmailNotExistBoolean);
            res.send([UserNotExistBoolean, EmailNotExistBoolean]);
        }
    });
});

router.post('/getUserInfo', authorizeUser.verifyToken, (req, res) => {
    jwt.verify(req.token, 'user-info', (err, authData) => {
        console.log(authData)
        if (err){
            throw new generalError('unknown error occured, cannot verify token');
        } else{
            res.json({
                message: 'sent user info',
                authData
            });
        }
    });
});

module.exports = router;
