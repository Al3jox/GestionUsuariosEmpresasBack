// Modelo del objeto
const mongoose = require("mongoose");
const{Schema} = mongoose;

const empresasSchema = new Schema ({
    nombre: {type: String},
    nit: {type : Number},
    direccion: {type: String},
    correo: {type: String},
    telefono: {type:Number},
    imagen: {type:String}
})

// Exportación del modelo
module.exports = mongoose.model('empresas', empresasSchema);