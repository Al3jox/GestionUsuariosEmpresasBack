const {Router} = require('express');
const router = Router();
const empresasCtr = require('../controllers/empresas-controller');

// Ruteo de Funciones
//==========================================================
router.post('/crearEmpresa', empresasCtr.crea);
router.put('/actualizarEmpresa/id', empresasCtr.actualizarEmpresa);
router.get('/listarEmpresas', empresasCtr.listarEmpresas);
router.delete('/eliminarEmpresa/:id', empresasCtr.eliminarEmpresa);
//==========================================================

module.exports = router