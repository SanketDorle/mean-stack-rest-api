const bcrypt = require('bcrypt');

function createHash(password, callback) {
	bcrypt.hash(password, 10, callback);
}

function comparePassword(password, hash, callback) {
	bcrypt.compare(password, hash, callback);
}

module.exports.createHash = createHash;
module.exports.comparePassword = comparePassword;