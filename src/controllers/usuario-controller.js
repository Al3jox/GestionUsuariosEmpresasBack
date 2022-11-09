const UsuariosCtr = {};
const usuariosModel = require("../models/usuarios-models");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Login de Usuarios
//============================================================
UsuariosCtr.login = async(req, res) => {
    const {correo, contrasena} = req.body
    const usuario = await usuariosModel.findOne({correo:correo})
    if(!usuario){
        return res.json({
            mensaje: 'El correo no se encuentra registrado. Por favor valide'
        })
    }

    const match = await bcrypt.compare(contrasena, usuario.contrasena)
    if(match){
        const token = jwt.sign({_id: usuario._id},'SecurePassword')
        res.json({
            mensaje: '¡Bienvenido/a!',
            id: usuario._id,
            nombres: usuario.nombres,
            token
        })
    }

    else{
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }
}
//============================================================


// Crear Usuario
//============================================================
UsuariosCtr.crear = async(req, res) => {
    const {nombres, apellidos, numDocumento, direccion, correo, contrasena, telefono, imagen} = req.body
    const nuevoUsuario = new usuariosModel({
        nombres, 
        apellidos, 
        numDocumento, 
        direccion, 
        correo,
        contrasena, 
        telefono, 
        imagen
    })

    // Validación por correo
    const correoUsuario = await usuariosModel.findOne({correo:correo})
    if(correoUsuario){
        res.json({
            mensaje: 'El correo ingresado ya se encuentra registrado'
        })
    }
    else{
        nuevoUsuario.contrasena = await bcrypt.hash(contrasena, 10);
        const token = jwt.sign({_id:nuevoUsuario._id}, 'SecurePassword');
        await nuevoUsuario.save()
        res.json({
            mensaje: 'Usuario Creado',
            id: nuevoUsuario._id,
            nombres: nuevoUsuario.nombres,
            token
        })
    }
    

}
//============================================================


// Actualizar Usuario
//============================================================
UsuariosCtr.actualizarUsuario = async(req, res) => {
    const id = req.params.id
    await usuariosModel.findByIdAndUpdate({_id:id}, req.body)
    const respuesta = await usuariosModel.findById({_id:id})
    res.json({
        mensaje: "Usuario actualizado!",
        respuesta,
    })
}
//============================================================


// Listar Usuarios
//============================================================
UsuariosCtr.listarUsuarios = async(req, res) => {
    const respuesta = await usuariosModel.find()
    res.json(respuesta)
}
//============================================================


// Eliminar Usuarios
//============================================================
UsuariosCtr.eliminarUsuarios = async(req, res) => {
    const id = req.params.id
    await usuariosModel.findByIdAndRemove({_id:id})
    res.json({
        mensaje: "El usuario ha sido actualizado"
    })
}
//============================================================

module.exports = UsuariosCtr