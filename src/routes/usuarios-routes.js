const {Router} = require('express');
const router = Router();
const usuariosCtr = require('../controllers/usuario-controller');
const auth = require('../helper/auth');

// Rutas de funciones
//=====================================================
// Crud
router.post('/crearUsuario', auth.verificarToken, usuariosCtr.crear);
router.put('/actualizarUsuario/:id', auth.verificarToken, usuariosCtr.actualizarUsuario);
router.get('/listarUsuarios', usuariosCtr.listarUsuarios);
router.delete('/eliminarUsuario/:id', auth.verificarToken, usuariosCtr.eliminarUsuarios);
// Login
router.post('/login', usuariosCtr.login);
//=====================================================

module.exports = router