const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const CountrySchema = new Schema({
    code : {
        type: String,
        required: [true, 'el codigo de pais del maraton es requerido'],
        unique: true
    },
    name : {
        type: String,
        required: [true, 'el nombre del pais del maraton es requerido'],
        unique: true
    }
})

module.exports = mongoose.model('Country',CountrySchema)