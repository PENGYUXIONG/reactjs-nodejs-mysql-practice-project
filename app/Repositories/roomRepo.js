queryError = require('../Exceptions/queryError');
databaseError = require('../Exceptions/databaseError');
connection = require('../Db/connection');

class roomRepo{

	// whether room name already exist
	isValidRoomName(roomName, callback){
		let query = `select * from rooms WHERE name = ?`;
		let parameter = roomName;
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot fetch user to database');
			else if (result.length !== 0)callback(null, false);
			else{
				callback(null, true);
			}
		});
  }
  
	saveRoom(roomName, passWord, callback){
		let query = `INSERT INTO rooms(name, password) 
		VALUES(?, ?)`;
		let parameter = [roomName, passWord];
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot save the new user to database');
			callback(null, true)
		});
  }
  
  async fetchRoom(roomName, callback){
		let query = `SELECT * FROM rooms WHERE name=?`;
		let parameter = roomName;
		connection.query(query, parameter, (err, result)=>{
			if (err) throw new queryError('query failed! cannot fetch room from the database');
			else if (result.length === 0)callback(null, false);
			else{
				let formatedResult = JSON.parse(JSON.stringify(result[0]));
				console.log(formatedResult);
				callback(null, formatedResult);
			}
		});
	}

}

module.exports = new roomRepo()
