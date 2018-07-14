const typeRolModel = require('../../models/master_detail/types-roles-model')

module.exports = {

    getTypeRol: async (req, res) => { 
        const types  = await typeRolModel.find({});
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, TypeRol List - GET",
            typeRol:  types
        })
    },

    createTypeRol: async (req, res) => {  
        try {            
            const typeRol  = new typeRolModel(req.body);
                                await typeRol.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeRol Save - POST",
                type:       typeRol
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeRol: async (req, res) => {
        try {
            
            const { typeRolId } = req.params;
            const newTypeRol    = req.body;
            const typeUpdate         = await typeRolModel.findByIdAndUpdate(typeRolId, newTypeRol);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeRol Update - PUT",
                types:      typeUpdate
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - PUT", 
                error:      error                
            })
        }
    },

    deleteTypeRol: async (req, res) => {
        try {
            const { typeRolId } = req.params;
            const typeRolDelete = await typeRolModel.findByIdAndRemove(typeRolId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeRol Delete - DELETE",
                types:      typeRolDelete
            });
        } catch (error) {
            return res.status(404).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - DELETE", 
                error:      error                
            })
        }

    }



};