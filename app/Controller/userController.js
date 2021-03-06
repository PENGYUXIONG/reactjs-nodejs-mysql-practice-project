// import user services
userService = require('../Services/userServices');
generalError = require('../Exceptions/generalError');

class userController{
  async checkUser(userName, passWord, callback){
		await userService.getValidateUser(userName, passWord, async function(err, isLoggedIn, isSignedUp, user){
			if (err) throw new generalError('unknown error occured');
      else{
				callback(null, [isLoggedIn, isSignedUp], user);
			}
		});
  }
  
  async getUser(userName, callback){
    await userService.getUser(userName, async function(err, user){
      if (err) throw new generalError('unknown error occureed, fail to fetch user')
      else{
        callback(null, user);
      }
    })
  }

  saveUser(userName, passWord, email, callback){
    userService.saveUser(userName, passWord, email, function(err, UserNotExistBoolean, EmailNotExistBoolean){
      if (err) throw new generalError('unknown error occured!');
      else{
        callback(null, UserNotExistBoolean, EmailNotExistBoolean);
      }
    });
  }

  updateUser(userId, userName, passWord, email, callback){
    userService.updateUser(userId, userName, passWord, email, function(err, UserNotExistBoolean, EmailNotExistBoolean){
      if (err) throw new generalError('unknown error occured!');
      else{
        callback(null, UserNotExistBoolean, EmailNotExistBoolean);
      }
    });
  }
  
}

module.exports = new userController()