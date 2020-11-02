require('dotenv').config()

const { UnauthorizedError } = require('./errors')

const isAuthorized = (req, res, next) => {
  let token = req.headers['authorization']

  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    } else {
      next(new UnauthorizedError('Bad token format'))
    }

    if (token === process.env.BEARER) {
      next()
    } else {
      next(new UnauthorizedError('Invalid token'))
    }
  } else {
    next(new UnauthorizedError('Missing token'))
  }
}

module.exports = isAuthorized
