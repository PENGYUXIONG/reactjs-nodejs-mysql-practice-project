// import room repo
roomRepo = require('../Repositories/roomRepo');
generalError = require('../Exceptions/generalError');
bcryptjs = require('bcryptjs');


class roomServices{
  validateRoom(roomName, callback) {
		roomRepo.isValidRoomName(roomName, function(err, roomNotExistBoolean){
			if (err) throw new generalError('unknown error occured! cannot validate room');
			else{
				callback(null, roomNotExistBoolean);
			}
		});
	}

	fetchRoom(roomName, passWord, callback){
		roomRepo.fetchRoom(roomName, async function(err, room){
			if (err) throw new generalError('unknown error occured! cannot get room');
			else{
        const isValid = await bcryptjs.compare(passWord, room['password']);
        if (isValid){
          callback(null, room);
        } else{
          callback(null, 'wrong password');
        }
			}
		});
	}

	saveRoom(roomName, passWord, callback){
		roomRepo.saveRoom(roomName, passWord, function(err){
			if (err) throw new generalError('unknown error occured! cannot get room');
			else{
				callback(null, true);
			}
		})
  }
  
  getValidateRoom(roomName, passWord, callback){
    roomRepo.isValidRoomName(roomName, function(err, roomNotExistBoolean){
      if (err) throw new generalError('unknown error occured! cannot validate room');
      else{
        if (roomNotExistBoolean){
          callback(null, null);
        }else{
          roomRepo.fetchRoom(roomName, async function(err, room){
            if (err) throw new generalError('unknown error occured! cannot get room');
            else{
              const isValid = await bcryptjs.compare(passWord, room['password']);
              if (isValid){
                callback(null, room);
              } else{
                callback(null, 'wrong password');
              }
            }
          })
        }
      }
    });
  }

  saveValidateRoom(roomName, passWord, callback){
    this.validateRoom(roomName, function(err, roomNotExistBoolean){
      if (err) throw new generalError('unknown error occured! cannot validate room');
      else{
        if (roomNotExistBoolean){
          roomRepo.saveRoom(roomName, passWord, function(err, roomSavedBoolean){
            if (err) throw new generalError('unknown error occured! cannot save room');
            callback(null, roomSavedBoolean);
          });
        }else{
          callback(null, false);
        }
      }
    });
  }

}

module.exports = new roomServices();