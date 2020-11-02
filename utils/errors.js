class UnauthorizedError extends Error {
  constructor(message) {
    super(message)

    this.statusCode = 401
    this.name = 'UnauthorizedError'
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message)

    this.statusCode = 400
    this.name = 'BadRequestError'
  }
}

module.exports = {
  UnauthorizedError,
  BadRequestError,
}
