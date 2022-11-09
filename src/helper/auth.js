const auth = {}
const { json } = require('body-parser');
const jwt = require('jsonwebtoken');


// Valida el token
//===============================================
auth.verificarToken = (req, res, next) => {
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'No estás autorizado'
        })
    }
    
    const token = req.headers.autorizacion
    if(token === 'null'){
        return res.json({
            mensaje: 'No has iniciado sesión'
        })
    }

    jwt.verify(token, 'SecurePassword', (error, resultado) => {
        if(error){
            return res,json({
                mensaje: 'Se ha perdido la conexión y tu sesión ha finalizado. Por favor vuelve a iniciar sesión'
            })

            next();

        }
    })
}
//===============================================

module.exports = auth