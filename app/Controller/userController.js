// import user services
userService = require('../Services/userServices');
generalError = require('../Exceptions/generalError');

class userController{
  async checkUser(userName, passWord, callback){
		await userService.getValidateUser(userName, passWord, async function(err, isLoggedIn, isSignedUp, user){
			if (err) throw new generalError('unknown error occured');
      else{
				callback(null, [isLoggedIn, isSignedUp, user]);
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