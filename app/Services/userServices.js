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
					userRepo.isValidEmail(email, function(err, emailNotExistBoolean){
						if (err) throw new generalError('unknow error occured!');
						else{
							console.log('what the fuck' + (emailNotExistBoolean && userNotExistBoolean))
							if (emailNotExistBoolean && userNotExistBoolean){
								console.log('saving')
								userRepo.saveUser(userName, passWord, email, function(err){
									if (err) throw new generalError('unknow error occured!');
								});
							}
							callback(null, userNotExistBoolean, emailNotExistBoolean);
						}
					})
				}
		});
	}
}

module.exports = new userServices();
