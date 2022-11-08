// Requisitos principales 
// ======================================================
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
// ======================================================

// Requerimos la BD
// ======================================================
require('./database');
// ======================================================

// Configuración del puerto
// ======================================================
app.set('Port', process.env.PORT || 3001);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen: "*"}));
// ======================================================

//Rutas
// ======================================================

// ======================================================

// Escucha del puerto
// ======================================================
app.listen(app.get('Port'), () =>{
    console.log("Se está escuchando el puerto: ", app.get('Port'));
})
// ======================================================

