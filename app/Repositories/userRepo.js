let queryError = require('../Exceptions/queryError')
let mysql = require('mysql');
// database connection configuration
let config = {
	host : 'localhost',
	user : 'root',
	password : 'password',
	database : 'devDb'
};

// create connection to database and run  query
function connectDb(query, parameter=Null) {
	let connection = mysql.createConnection(config);
	connection.query(query, parameter, function(err){
		if (err) throw new queryError('failed to save user data to sql database');
	});
	connection.end();
};

class userRepo{
	saveUser(userName, passWord){
		let sql = `INSERT INTO users(name, password)
		VALUES(? , ?)`;
		let parameter = [userName, passWord]
		connectDb(sql, parameter);
	}
};

module.exports = new userRepo()
