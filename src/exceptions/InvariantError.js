const ClientError = require('./ClientError');

// Custom error yang mengindikasikan error karena kesalahan validasi data
class InvariantError extends ClientError {
  constructor(message) { // nilai default status code ClientError, 400
    super(message);
    this.name = 'InvariantError';
  }
}

module.exports = InvariantError;
