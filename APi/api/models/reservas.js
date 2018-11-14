const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reservas = new Schema(
  {
    Usuario: Number,
    Zona: Number,
    Celda: String,
    Fecha: String,
    Vehiculo:String
  },
  { collection: 'ep_Reservas',
  toJSON: { virtuals: true } },
)

module.exports = mongoose.model('Reservas', Reservas)
