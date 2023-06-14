const ClientError = require('./ClientError');

// Custom error yang mengindikasikan error karena resource yang diminta client tidak ditemukan
class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
