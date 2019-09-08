// import user services
userService = require('../Services/userServices');
generalError = require('../Exceptions/generalError');

class userController{
  checkUser(userName, passWord, callback){
		userService.getUser(userName, passWord, function(err, user){
			if (err) throw new generalError('unknown error occured');
			else if (!user) callback(null, [false,""]);
			else{
				callback(null, [true, userName]);
			}
		});
  }
  
  saveUser(userName, passWord, callback){
    userService.saveUser(userName, passWord, function(err, saveUserBoolean){
      if (err) throw new generalError('unknown error occured!');
      else{
        callback(null, saveUserBoolean);
      }
    });
  }
}

module.exports = new userController()