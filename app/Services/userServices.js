// import user repo
userRepo = require('../Repositories/userRepo');
generalError = require('../Exceptions/generalError');

class userServices{
	getUser(userName, passWord, callback){
		userRepo.isValidUser(userName, function(err, userNotExistBoolean){
			if (err) throw new generalError('unknown error occured!');
			else{
					userRepo.fetchUser(userName,passWord, function(err, user){
						if (err) throw new generalError('unknown error occured!');
						else{
							// valid user means username does not exist
							callback(null, !userNotExistBoolean, user);
						}
					});
				}
			});
	}

	saveUser(userName, passWord, email, callback) {
		userRepo.isValidUser(userName, function(err, userNotExistBoolean){
			if (err) throw new generalError('unknown error occured!');
			else{
				if (userNotExistBoolean){
					userRepo.saveUser(userName, passWord, email, function(err){
						if (err) throw new generalError('unknow error occured!');
					});
				}
				callback(null, userNotExistBoolean);
			}
		});
	}
}

module.exports = new userServices();
