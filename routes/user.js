const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'hello from the user route!' })
})

module.exports = router
