const UsuariosCtr = {};
const usuariosModel = require("../models/usuarios-models");
const usuario = require("../models/usuarios-models");

// Crear Usuario
//============================================================
UsuariosCtr.crear = async(req, res) => {
    const {nombres, apellidos, numDocumento, direccion, correo, telefono, imagen} = req.body
    const nuevoUsuario = new usuario({
        nombres, 
        apellidos, 
        numDocumento, 
        direccion, 
        correo, 
        telefono, 
        imagen
    })

    const respuesta = await nuevoUsuario.save()
    res.json({
        mensaje: 'Usuario Creado',
        respuesta
    })

}
//============================================================


// Actualizar Usuario
//============================================================
UsuariosCtr.actualizarUsuario = async(req, res) => {
    const id = req.params.id;
    await usuariosModel.findByIdAndUpdate({_id:id}, req.body);
    const respuesta = await usuariosModel.findById({_id:id});
    res.json({
        mensaje: "Usuario actualizado!",
        respuesta,
    });
};
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