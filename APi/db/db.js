const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.Promise = global.Promise

require('../api/models/novedades')
require('../api/models/reservas')
require('../api/models/zonas')

const db = mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
  }
)
module.exports = db