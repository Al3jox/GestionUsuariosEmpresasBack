const EmpresasCtr = {};
const empresasModel = require('../models/empresas-models');
const empresa = require('../models/empresas-models');

//Crear Empresa
//======================================================
EmpresasCtr.crea = async(req, res) => {
    const {nombre, nit, direccion, correo, telefono, imagen} = req.body
    const nuevaEmpresa = new empresa({
        nombre, 
        nit, 
        direccion, 
        correo, 
        telefono, 
        imagen
    })

    const respuesta = await nuevaEmpresa.save()
    res.json({
        mensaje: "La empresa fue creada con exito!"
    })
}
//======================================================


//Actualizar Empresa
//======================================================
EmpresasCtr.actualizarEmpresa = async(req, res) => {
    const id = req.params.id;
    await empresasModel.findByIdAndUpdate({_id:id}, req.body);
    const respuesta = await empresasModel.findById({_id:id});
    res.json({
        mensaje: "La empresa fue actualisada",
        respuesta,
    })
}
//======================================================

//Listar Empresa
//======================================================
EmpresasCtr.listarEmpresas = async(req, res) => {
    const respuesta = await empresasModel.find()
    res.json(respuesta)
}
//======================================================


//Eliminar Empresa
//======================================================
EmpresasCtr.eliminarEmpresa = async(req, res) =>{
    const id = req.params.id
    await empresasModel.findByIdAndRemove({_id : id})
    res.json({
        mensaje: "La empresa fue elimanada con exito :C"
    })
}
//======================================================

module.exports = EmpresasCtr