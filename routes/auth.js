const router = require('express').Router()
const { UnauthorizedError } = require('../utils/errors')

const username = 'admin'
const password = 'root'

router.post('/', (req, res, next) => {
  const user = req.body.user
  const pass = req.body.password

  if (user === username && pass === password) {
    res.status(200).json({ msg: 'logged in' })
  } else {
    next(new UnauthorizedError('Invalid credentials'))
  }
})

module.exports = router
