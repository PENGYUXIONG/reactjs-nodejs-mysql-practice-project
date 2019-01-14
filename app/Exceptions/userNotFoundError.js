const generalError = require('../Exceptions/generalError');
module.exports = class userNotFoundError extends generalError {
    constructor(message) {
        super(message || 'User Not Found', 400);
    }
};
