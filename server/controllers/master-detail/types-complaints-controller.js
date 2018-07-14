const typeComplaintModel = require('../../models/master_detail/types-complaints-model')

module.exports = {

    getTypeComplaint: async (req, res) => { 
        const types  = await typeComplaintModel.find({});
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, TypeComplaint List - GET",
            typeComplaint:  types
        })
    },

    createTypeComplaint: async (req, res) => {  
        try {            
            const typeComplaint  = new typeComplaintModel(req.body);
                                await typeComplaint.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeComplaint Save - POST",
                type:       typeComplaint
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeComplaint: async (req, res) => {
        try {
            
            const { typeComplaintId } = req.params;
            const newTypeComplaint    = req.body;
            const typeUpdate         = await typeComplaintModel.findByIdAndUpdate(typeComplaintId, newTypeComplaint);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeComplaint Update - PUT",
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

    deleteTypeComplaint: async (req, res) => {
        try {
            const { typeComplaintId } = req.params;
            const typeComplaintDelete = await typeComplaintModel.findByIdAndRemove(typeComplaintId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeComplaint Delete - DELETE",
                types:      typeComplaintDelete
            });
        } catch (error) {
            return res.status(404).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - DELETE", 
                error:      error                
            })
        }

    }


}