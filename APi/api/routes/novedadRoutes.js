const express = require('express')
const novedad = require('../controllers/novedadController')

const router = express.Router()

router.get('/novedad/', novedad.findAll)
router.post('/novedad/', novedad.create)
router.post('/novedad/:Novedad_id', novedad.delete)
module.exports = router
