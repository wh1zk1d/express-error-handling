const router = require('express').Router()
const isAuthorized = require('../utils/auth')

const user = require('./user')
const message = require('./message')
const project = require('./project')
const auth = require('./auth')

router.get('/', (req, res) => {
  res.send('hello world!')
})

router.use('/auth', auth)
router.use('/user', isAuthorized, user)
router.use('/message', message)
router.use('/project', project)

// 404 Redirect
router.get('*', (req, res, next) => {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`)
  error.statusCode = 301
  next(error)
})

// Error handling
router.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500

  if (error.statusCode === 301) {
    return res.status(301).redirect('/')
  }

  return res.status(error.statusCode).json({ error: error.toString() })
})

module.exports = router
