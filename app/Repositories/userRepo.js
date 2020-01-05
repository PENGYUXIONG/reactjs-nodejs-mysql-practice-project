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
	isValidUser(userName, callback, userId=0){
		let query = `SELECT * FROM users WHERE name=? AND id<>?`;
		let parameter = [userName, userId];
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot fetch user to database');
			else if (result.length !== 0)callback(null, false);
			else{
				callback(null, true);
			}
		});
	}

	// whether email is still avaliable
	isValidEmail(email, callback, userId=0){
		let query = `SELECT * FROM users WHERE email=? AND id<>?`;
		let parameter = [email,userId];
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

	updateUser(id, userName, passWord, email){
		let query = `UPDATE users SET name = ?, password = ?, email = ? WHERE id = ?`;
		let parameter = [userName, passWord, email, id];
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot update the user in database');
		});
	}
}

module.exports = new userRepo()
