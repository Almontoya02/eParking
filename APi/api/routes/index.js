const express = require('express')

const reservaRoutes = require('./reservaRoutes')
const novedadRoutes = require('./novedadRoutes')
const zonaRoutes = require('./zonaRoutes')

const router = express.Router()

router.use('/api', reservaRoutes)
router.use('/api', novedadRoutes)
router.use('/api', zonaRoutes)

module.exports = router