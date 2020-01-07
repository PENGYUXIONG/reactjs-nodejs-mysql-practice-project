// import room services
roomService = require('../Services/roomServices');
generalError = require('../Exceptions/generalError');

class roomController{

  validateRoom(roomName, callback){
    roomService.validateRoom(roomName, function(err, roomNotExistBoolean){
      if (err) throw new generalError('unknown error occured! cannot validate room');
      else{
        callback(null, roomNotExistBoolean);
      }
    });
  }

  getValidateRoom(roomName, passWord, callback){
    roomService.getValidateRoom(roomName, passWord, function(err, room){
      if (err) throw new generalError('unknown error occured! cannot get validated room');
      else{
        callback(null, room);
      }
    })
  }

  saveValidateRoom(roomName, passWord, callback){
    roomService.saveValidateRoom(roomName, passWord, function(err, roomSavedBoolean){
      if (err) throw new generalError('unknown error occured! cannot save validated room');
      else{
        callback(null, roomSavedBoolean);
      }
    })
  }

}

module.exports = new roomController();