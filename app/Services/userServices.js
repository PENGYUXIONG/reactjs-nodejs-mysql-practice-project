// import user repo
userRepo = require('../Repositories/userRepo')

class userServices{
	saveUser(userName, passWord) {
		userRepo.saveUser(userName, passWord)
	}
}

module.exports = new userServices();
