const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Zonas = new Schema(
  {
    NombreZona: String,
    Ubicacion: String,
    Capacidad: String,
    Celdas: [
        {
            CodigoCelda: String,
            Disponibilidad: Boolean
        }
    ]
  },
  { collection: 'ep_Zonas',
  toJSON: { virtuals: true } }
)

module.exports = mongoose.model('Zonas', Zonas)

