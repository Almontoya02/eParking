const mongoose = require('mongoose')
const Zona = mongoose.model('Zonas')
const utils = require('../handlers/utils')

//Retorna todos las zonas
exports.findAll = function (req, res) {
    Zona.find({}).exec(function (err, Zona) {
    utils.show(res, err, Zona)
  })
}