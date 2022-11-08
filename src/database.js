// Se requiere moongose
// ======================================================
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
// ======================================================

//BD Local 
// ======================================================
URL = ('mongodb://localhost:27017/prueba');
// ======================================================

// Conexión
// ======================================================
mongoose
    .connect(URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(db => console.log("Conexión exitosa a la BD: ", db.connection.name))
    .catch(error => console.log(error))
// ======================================================

// Módulo de esportación
// ======================================================
module.exports = mongoose;
// ======================================================