const c = console.log,
      mongoose = require('mongoose'),
      config = require('../config')

class Database {
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect(process.env.URL_DB,  {useNewUrlParser: true })
            .then( () => c(`Conexion exitosa con Mongo ${process.env.URL_DB}`))
            .catch( err => c(`Error de conexión de BD ${err.message}`))
    }

}

module.exports = new Database()