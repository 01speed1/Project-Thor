const typeMedicineModel = require('../../models/master_detail/types-medicines-model')

module.exports = {

    getTypeMedicine: async (req, res) => { 
        const types  = await typeMedicineModel.find({});
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, TypeMedicine List - GET",
            typeMedicine:  types
        })
    },

    createTypeMedicine: async (req, res) => {  
        try {            
            const typeMedicine  = new typeMedicineModel(req.body);
                                await typeMedicine.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeMedicine Save - POST",
                type:       typeMedicine
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeMedicine: async (req, res) => {
        try {
            
            let { typeMedicineId } = req.params;
            let  newTypeMedicine   = req.body;
                                     await typeMedicineModel.findByIdAndUpdate(typeMedicineId, newTypeMedicine);
            let typeUpdate         = await typeMedicineModel.findById(typeMedicineId)

            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeMedicine Update - PUT",
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

    deleteTypeMedicine: async (req, res) => {
        try {
            const { typeMedicineId } = req.params;
            const typeMedicineDelete = await typeMedicineModel.findByIdAndRemove(typeMedicineId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeMedicine Delete - DELETE",
                types:      typeMedicineDelete
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