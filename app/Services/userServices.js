// import user repo
userRepo = require('../Repositories/userRepo');
generalError = require('../Exceptions/generalError');
bcryptjs = require('bcryptjs');

class userServices{
	async getUser(userName, callback){
		userRepo.isValidUser(userName, function(err, userNotExistBoolean){
			if (err) throw new generalError('unknown error occured!');
			else{
				if (userNotExistBoolean){
					callback(null, "");
				} else{
						userRepo.fetchUser(userName, function(err, user){
							if (err) throw new generalError('unknown error occured!');
							else{
								// valid user means username does not exist
								callback(null, user);
							}
						});
					}
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

	updateUser(userId, userName, passWord, email, callback) {
		userRepo.isValidUser(userName, function(err, userNotExistBoolean){
			if (err) throw new generalError('unknown error occured!');
			else{
					userRepo.isValidEmail(email,  function(err, emailNotExistBoolean){
						if (err) throw new generalError('unknow error occured!');
						else{
							if (emailNotExistBoolean && userNotExistBoolean){
								console.log('updating')
								userRepo.updateUser(userId, userName, passWord, email, function(err){
									if (err) throw new generalError('unknow error occured!, fail to update userInfo');
								});
							}
							callback(null, userNotExistBoolean, emailNotExistBoolean);
						}
					}, userId)
				}
		}, userId);
	}

	getValidateUser(userName, passWord, callback) {
		this.getUser(userName, async function(err, user){
			if (err) throw new generalError('unknown error occured!');
			else{
				if (user){
					const IsloggedIn = await bcryptjs.compare(passWord, user['password']);
					callback(null, IsloggedIn, true, user);
				} else{
					callback(null, false, false, '');
				}
			}
		});
	}
	
}

module.exports = new userServices();
