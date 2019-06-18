queryError = require('../Exceptions/queryError');
databaseError = require('../Exceptions/databaseError');
connection = require('../Db/connection');


class userRepo{
	fetchUser(userName, passWord, callback){
		let query = `SELECT * FROM users WHERE name = ? AND password = ?`;
		let parameter = [userName, passWord];
		
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot fetch user from the database');
			else if (result.length === 0)callback(null, false);
			else{
				let formatedResult = JSON.parse(JSON.stringify(result[0]));
				console.log(formatedResult);
				callback(null, formatedResult);
			}
		});
	}
	saveUser(userName, passWord){
		let query = `INSERT INTO users(name, password)
		VALUES(? , ?)`;
		let parameter = [userName, passWord];
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot save the new user to database');
		});
	}
};

module.exports = new userRepo()
