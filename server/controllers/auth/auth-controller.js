const userModel  = require('../../models/user-model');
const bcrypt     = require('bcrypt');
const jwt        = require('jsonwebtoken');

module.exports = {

    login: (req, res) => {        

        let body = req.body;                

            userModel.findOne({ email: body.email}, (err, userDB) => {

                if (err) res.json({ Ok: false, message: 'Ups! It had occured an error - Login POST ', error: err});
                if ( !bcrypt.compareSync( body.password, userDB.password ) ) res.json({ Ok: false, message: 'Ups! It had occured an error password - Login POST ', error: err});
                
                userDB.password = ':), oh! esta es mi contraseña :D'

                let token = jwt.sign({user: userDB}, 'a-d-o-p-t-a-.-m-e', {expiresIn: 18000})
    
                res.status(200).json({
                    Ok:             true,
                    message:        "Congratulations, Login - POST",
                    user:           userDB,
                    token:          token
                })
    
            })                       

    }

};