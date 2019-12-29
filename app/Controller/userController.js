// import user services
userService = require('../Services/userServices');
generalError = require('../Exceptions/generalError');

class userController{
  checkUser(userName, passWord, callback){
		userService.getUser(userName, passWord, function(err, userSavedBoolean, user){
			if (err) throw new generalError('unknown error occured');
			else if (!user) callback(null, [false, userSavedBoolean, ""]);
			else{
				callback(null, [true, userSavedBoolean,user.id, userName]);
			}
		});
  }
  
  saveUser(userName, passWord, email, callback){
    userService.saveUser(userName, passWord, email, function(err, UserNotExistBoolean, EmailNotExistBoolean){
      if (err) throw new generalError('unknown error occured!');
      else{
        callback(null, UserNotExistBoolean, EmailNotExistBoolean);
      }
    });
  }
}

module.exports = new userController()