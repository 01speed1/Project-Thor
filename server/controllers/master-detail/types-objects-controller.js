const typeObjectModel = require('../../models/master_detail/types-objects-model')

module.exports = {

    getTypeObject: async (req, res) => { 
        const types  = await typeObjectModel.find({});
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, TypeObject List - GET",
            typeObject:  types
        })
    },

    createTypeObject: async (req, res) => {  
        try {            
            const typeObject  = new typeObjectModel(req.body);
                                await typeObject.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeObject Save - POST",
                type:       typeObject
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeObject: async (req, res) => {
        try {
            
            const { typeObjectId } = req.params;
            const newTypeObject    = req.body;
            const typeUpdate       = await typeObjectModel.findByIdAndUpdate(typeObjectId, newTypeObject);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeObject Update - PUT",
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

    deleteTypeObject: async (req, res) => {
        try {
            const { typeObjectId } = req.params;
            const typeObjectDelete = await typeObjectModel.findByIdAndRemove(typeObjectId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeObject Delete - DELETE",
                types:      typeObjectDelete
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