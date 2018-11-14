const mongoose = require('mongoose')
const Novedad = mongoose.model('Novedades')
const utils = require('../handlers/utils')

//Retorna todos las novedades
exports.findAll = function (req, res) {
    Novedad.find({}).exec(function (err, Novedad) {
    utils.show(res, err, Novedad)
  })
}
//crea una novedad
exports.create = function (req, res) {
  console.log(req.body);
  const novedad = new Novedad(req.body)
  novedad.save(function (err, novedad) {
    utils.show(res, err, novedad)
  })
}
// exports.create = function(req, res) {
//   const { Cedula, Tipo, Descripcion, Zona } = req.body
//   const novedad = new Novedad({
//     Cedula,
//     Tipo,
//     Descripcion,
//     Zona,
//   })
//   console.log(novedad)
//   novedad.save(function(err, novedad) {
//     utils.show(res, err, novedad)
//   })

// }

//Elimina una novedad 
exports.delete = function (req, res) {
    Novedad.deleteOne(req.params.Novedad._id).exec(function (err, Novedad) {
      utils.show(res, err, Novedad)
    })
  }



