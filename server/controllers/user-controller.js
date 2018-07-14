const userModel = require('../models/user-model');
const bcrypt    = require('bcrypt');


module.exports = {

    getUsersAll: async (req, res) => {        
        try {
            let users = await userModel.find({});    
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, User - GET",
                users:          users,
                token:          req.user.rol
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })
        }
    },

    createUser: async (req, res) => {
        try {
            let body = req.body;
            let user =  new userModel({
                name:       body.name,
                lastname:   body.lastname,
                email:      body.email,
                password:   bcrypt.hashSync(body.password, 10),
                tag: {
                    born:   body.born,
                    age:    body.age
                },
                address:    body.address,
                phone:      body.phone,
                ubication:  null                         
            }); 

            if (body.rol) { 
                user.rol = body.rol 
            }            
            
            await user.save();            

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, User - POST",
                users:          user
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateUser: async (req, res) => {
        try {
            let { userId } = req.params;
            let body       = req.body;
            let userUpdate      =  { }
                userUpdate.name =       body.name;
                userUpdate.lastname =   body.lastname;
                userUpdate.email    =   body.email;

                if ( body.password != '' ) userUpdate.password = bcrypt.hashSync(body.password, 10)
                
                userUpdate.tag = {
                    born:   body.born,
                    age:    body.age
                },
                userUpdate.address   =  body.address;
                userUpdate.phone     =  body.phone;
                userUpdate.ubication =  null;                     

                            await userModel.findByIdAndUpdate(userId, userUpdate);
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, User - PUT",
                users:          userUpdate
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
            let { userId } = req.params;
            let user       = await userModel.findByIdAndRemove(userId);
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, User - DELETE",
                user:           user
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - DELETE", 
                error:          error
            })
        }
    }
    
};


