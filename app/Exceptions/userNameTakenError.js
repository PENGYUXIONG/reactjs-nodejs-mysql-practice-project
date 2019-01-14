const generalError = require('../Exceptions/generalError');
module.exports = class userNameTakenError extends generalError {
  constructor (message) {
    super(message || 'Specified Username is already taken', 400);
  }
};
