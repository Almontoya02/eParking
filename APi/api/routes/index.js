const express = require('express')

const reservaRoutes = require('./reservaRoutes')
const novedadRoutes = require('./novedadRoutes')

const router = express.Router()

router.use('/api', reservaRoutes)
router.use('/api', novedadRoutes)

module.exports = router