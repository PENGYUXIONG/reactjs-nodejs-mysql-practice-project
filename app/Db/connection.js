mysql = require('mysql');

// database connection configuration
let config = {
	host : 'localhost',
	user : 'root',
	password : 'password',
	database : 'devDb'
};

// create connection to database and run  query
let connection = mysql.createConnection(config, (err)=>{
	if (err) throw new databaseError('failed to connect to database');
})




module.exports = connection;