const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Novedades = new Schema(
  {
    Cedula: Number,
    Tipo: String,
    Descripcion: String,
    Zona: String
  },
  { collection: 'ep_Novedades',
  toJSON: { virtuals: true } }
)

module.exports = mongoose.model('Novedades', Novedades)
