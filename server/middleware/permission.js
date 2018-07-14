
exports.verifyRol = (req, res, next) => {

    let user = req.user;

    if(user.rol != 'administrator') {
        res.json({
            Ok:         false,
            message:    "You aren't able to delete nothing"            
        })
    }
    
    next();


}