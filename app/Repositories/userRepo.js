queryError = require('../Exceptions/queryError');
databaseError = require('../Exceptions/databaseError');
connection = require('../Db/connection');


class userRepo{
	fetchUser(userName, callback){
		let query = `SELECT * FROM users WHERE name = ?`;
		let parameter = [userName];
		
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

	// whether username is still avaliable
	isValidUser(userName, callback){
		let query = `SELECT * FROM users WHERE name=?`;
		let parameter = userName;
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot fetch user to database');
			else if (result.length !== 0)callback(null, false);
			else{
				callback(null, true);
			}
		});
	}

	// whether email is still avaliable
	isValidEmail(email, callback){
		let query = `SELECT * FROM users WHERE email=?`;
		let parameter = email;
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot fetch user to database');
			else if (result.length !== 0)callback(null, false);
			else{
				callback(null, true);
			}
		});
	}

	saveUser(userName, passWord, email){
		let query = `INSERT INTO users(name, password, email)
		VALUES(? , ?, ?)`;
		let parameter = [userName, passWord, email];
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot save the new user to database');
		});
	}
}

module.exports = new userRepo()
