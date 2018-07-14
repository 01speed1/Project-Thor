const jwt       = require('jsonwebtoken')

// Verificar Token

exports.verifyToken = function(req, res, next) {
    
    var token = req.query.token;    
    
    jwt.verify(token, 'a-d-o-p-t-a-.-m-e', (err, decoded) => {
            

        if(err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token Inválido',
                errors: err
            })  
        }        


        // Esto hace que todas las solicitudes que se realicen , pueda tener la trazabilidad del usuario que lo hace. 
        // seria bueno que req.usuario lo envíe en una respuesta json para que vea que el usuario completo está ahí
        // y esa informacion es muy valiosa.        
        req.user =  decoded.user;

        next();
        
    })
    
}
