// import user repo
userRepo = require('../Repositories/userRepo');
generalError = require('../Exceptions/generalError');

class userServices{
	checkUser(userName, passWord, callback){
		this.getUser(userName, passWord, function(err, user){
			if (err) throw new generalError('unknown error occured');
			else if (!user) callback(null, [false,""]);
			else{
				callback(null, [true, userName]);
			}
		});
	}

	getUser(userName, passWord, callback){
		userRepo.fetchUser(userName,passWord, function(err, user){
			if (err) throw new generalError('unknown error occured!');
			else{
				callback(null, user);
			}
		});
	}

	saveUser(userName, passWord, callback) {
		userRepo.isValidUser(userName, function(err, userSavedBoolean){
			if (err) throw new generalError('unknown error occured!');
			else{
				if (userSavedBoolean){
					userRepo.saveUser(userName, passWord, function(err){
						if (err) throw new generalError('unknow error occured!');
					});
				}
				callback(null, userSavedBoolean);
			}
		});
	}
}

module.exports = new userServices();
