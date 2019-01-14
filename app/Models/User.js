module.exports = 
class User{
    constructor(name, userId, password){
	this.name = name;
	this.userId = userId;
	this.password = password;
    }

    getName() {
	    return this.name;
    }

    getUserId() {
	    return this.userId;
    }

    getPassword(){
	    return this.password;
   }
};


