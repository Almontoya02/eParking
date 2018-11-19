const express = require('express')
const novedad = require('../controllers/zonaController')

const router = express.Router()

router.get('/zona/', novedad.findAll)

module.exports = router
