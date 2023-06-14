// Custom error karena masalah yang terjadi pada client.

class ClientError extends Error { // ditambahkan turunan dari ClientError
  constructor(message, statusCode = 400) { // nilai parameter default 400
    super(message);
    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}

module.exports = ClientError;
