class APIError extends Error {
  constructor(data) {
    super(data.message);
    this.code = data.code;
  }
}

module.exports = APIError;