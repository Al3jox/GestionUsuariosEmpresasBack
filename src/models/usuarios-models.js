// Modelo del objeto
const mongoose = require("mongoose");
const{Schema} = mongoose;

const usuariosSchema = new Schema ({
    nombres: {type: String},
    apellidos: {type: String},
    numDocumento: {type : Number},
    direccion: {type: String},
    correo: {type: String},
    telefono: {type:Number},
    imagen: {type:String}
})

// Exportación del modelo
module.exports = mongoose.model('usuarios', usuariosSchema);