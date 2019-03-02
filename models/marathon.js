const mongoose = require('mongoose'),
      Schema = mongoose.Schema

      
const MarathonSchema = new Schema({
    name : {
        type: String,
        required: [true, 'el nombre del maraton es requerido']
    },
    country : {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, 'el pais del maraton es requerido']
    },
    location : {
        type: String,
        required: [true, 'el lugar del maraton es requerido']
    },
    altitude : Number,
    race_web : {
        type: String,
        lowercase: true
    },
    race_logo : String,
    race_since : String,
    race_date : Date,
    race_type : {
        type: String,
        enum: ['city','trail'],
        default: 'city'
    },
    distance : {
        type : Number,
        min: 42.195,
        default: 42.195
    },
    resume: String
})

module.exports = mongoose.model('Marathon',MarathonSchema)