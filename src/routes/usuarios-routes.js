const {Router} = require('express');
const router = Router();
const usuariosCtr = require('../controllers/usuario-controller');

// Rutas de funciones
//=====================================================
// Crud
router.post('/crearUsuario', usuariosCtr.crear);
router.put('/actualizarUsuario/:id', usuariosCtr.actualizarUsuario);
router.get('/listarUsuarios', usuariosCtr.listarUsuarios);
router.delete('/eliminarUsuario/:id', usuariosCtr.eliminarUsuarios);
// Login
router.post('/login', usuariosCtr.login);
//=====================================================

module.exports = router