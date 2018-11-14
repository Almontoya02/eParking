const mongoose = require('mongoose')
const Reserva = mongoose.model('Reservas')
const utils = require('../handlers/utils')

//Retorna todos las novedades
exports.findAll = function (req, res) {
    Reserva.find({}).exec(function (err, Reserva) {
    utils.show(res, err, Reserva)
  })
}
//crea una novedad
exports.create = function (req, res) {
  console.log(req.body);
  const Reserva = new Novedad(req.body)
  Reserva.save(function (err, Reserva) {
    utils.show(res, err, Reserva)
  })
}
//Elimina una novedad 
exports.delete = function (req, res) {
    Reserva.deleteOne(req.params.Reserva_id).exec(function (err, Reserva) {
      utils.show(res, err, Reserva)
    })
  }

  //Actualiza un protegido
exports.update = function (req, res) {
    console.log(req.body);
    console.log(req.params.Reserva_id);
    Reserva.findOneAndUpdate({ 'Reserva_id': req.params.Reserva_id }, req.body, { new: true },
      function (err, Reserva) {
        utils.show(res, err, Reserva)
      })
  }
  //A
