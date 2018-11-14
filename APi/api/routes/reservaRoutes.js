const express = require('express')
const reserva = require('../controllers/reservaController')

const router = express.Router()

router.get('/reserva/', reserva.findAll)
router.post('/reserva/', reserva.create)
router.get('/reserva/', reserva.delete)
router.put('/reserva/:Reserva_id', reserva.update)

module.exports = router
