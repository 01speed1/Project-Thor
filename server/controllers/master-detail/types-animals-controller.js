const typeModel = require('../../models/master_detail/types-animals-model');

// Controller 
module.exports = {

    getTypesAnimal: async (req, res) => { 
        const types     = await typeModel.find();
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, Types List - GET",
            types:      types
        })
    },

    createTypeAnimal: async (req, res) => {  
        try {
            const typePost  = new typeModel(req.body);
            const typeSaved = await typePost.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeAnimal Save - POST",
                types:      typeSaved
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeAnimal: async (req, res) => {
        try {
            
            const { typeId } = req.params;
            const newType    = req.body;
            const typeUpdate = await typeModel.findByIdAndUpdate(typeId, newType);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeAnimal Update - PUT",
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

    deleteTypeAnimal: async (req, res) => {
        try {
            const { typeId } = req.params;
            const typeDelete = await typeModel.findByIdAndRemove(typeId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeAnimal Delete - DELETE",
                types:      typeDelete
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

