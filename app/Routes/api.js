// this is endpoints api file, check link before perform any modifications
router = require('express').Router();
path = require('path');
bodyParser = require('body-parser');
bcryptjs = require('bcryptjs');
jwt = require('jsonwebtoken');
generalError = require('../Exceptions/generalError');
authenticateUser = require('./AuthenticateUser');

router.use(bodyParser.json());

//import exceptions
generalError = require('../Exceptions/generalError');
// import services from the other files
userController = require('../Controller/userController');


// endpoints apis start
router.post('/login', async(req, res)=>{
    console.log(req.body, 'login');
    
    await userController.checkUser(req.body['userName'], req.body['passWord'], async function(err, userBoolean, userInfo){
        if (err) throw new generalError('internal error code 500');
        else{
            console.log(userBoolean)
            const userExist = JSON.stringify(userBoolean[0]);
            const user = JSON.stringify(userInfo);
            if (userExist == 'true'){
                jwt.sign({user: user}, 'user-info', function(err, token){
                    if (err) {
                        throw new generalError('unknown error occured, cannot generate token');
                    } else{
                        res.json({
                            userBoolean,
                            token
                        });
                    }
                });
            } else{
                res.json({userBoolean})
            }
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

router.post('/getUserInfo', authenticateUser.verifyToken, (req, res) => {
    console.log('fetch user info')
    jwt.verify(req.token, 'user-info', (err, authData) => {
        authData.user =  JSON.parse(authData.user)
        if (err){
            throw new generalError('unknown error occured, cannot verify token');
        } else{
            res.json({
                message: "sent user info",
                authData
            });
        }
    });
});

module.exports = router;
