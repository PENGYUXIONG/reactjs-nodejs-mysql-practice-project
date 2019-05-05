const generalError = require('../Exceptions/generalError');

module.exports = class queryError extends generalError{
	constructor (message) {
		super(message || 'query failed', 500);
	}
};
