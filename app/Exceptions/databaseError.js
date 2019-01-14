const generalError = require('../Exceptions/generalError');
module.exports = class databaseError extends generalError {
  constructor (message) {
    super(message || 'Database Creation Failed', 500);
  }
};
