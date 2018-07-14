const typeRhModel = require('../../models/master_detail/types-rhs-model')

module.exports = {

    getTypeRh: async (req, res) => { 
        const types  = await typeRhModel.find({});
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, TypeRh List - GET",
            typeRh:  types
        })
    },

    createTypeRh: async (req, res) => {
        try {   
            
            const typeRh  = new typeRhModel(req.body);
                                await typeRh.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeRh Save - POST",
                type:       typeRh
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeRh: async (req, res) => {
        try {
            
            const { typeRhId } = req.params;                        
            const newTypeRh    = req.body;
                               await typeRhModel.findByIdAndUpdate(typeRhId, newTypeRh); 
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeRh Update - PUT",
                types:      newTypeRh
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - PUT", 
                error:      error                
            })
        }
    },

    deleteTypeRh: async (req, res) => {
        try {
            const { typeRhId } = req.params;
            const typeRhDelete = await typeRhModel.findByIdAndRemove(typeRhId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeRh Delete - DELETE",
                types:      typeRhDelete
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