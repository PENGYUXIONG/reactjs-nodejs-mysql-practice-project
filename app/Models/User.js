module.exports = 
class User{
    constructor(name, userId, password, email){
	this.name = name;
	this.userId = userId;
    this.password = password;
    this.email = email;
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

    getEmail(){
        return this.email;
    }
};


