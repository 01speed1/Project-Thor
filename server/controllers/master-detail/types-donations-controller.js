const typeDonationModel = require('../../models/master_detail/types-donations-model');

module.exports = {

    getTypeDonation: async (req, res) => { 
        const types  = await typeDonationModel.find({});
        res.status(200).json({ 
            Ok:         true,   
            message:    "Congratulations, TypeDonation List - GET",
            typeDonation:  types
        })
    },

    createTypeDonation: async (req, res) => {  
        try {            
            const typeDonation  = new typeDonationModel(req.body);
                                  await typeDonation.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeDonation Save - POST",
                type:       typeDonation
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateTypeDonation: async (req, res) => {
        try {
            
            const { typeDonationId } = req.params;
            const newTypeDonation    = req.body;
            const typeUpdate         = await typeDonationModel.findByIdAndUpdate(typeDonationId, newTypeDonation);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeDonation Update - PUT",
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

    deleteTypeDonation: async (req, res) => {
        try {
            const { typeDonationId } = req.params;
            const typeDonationDelete = await typeDonationModel.findByIdAndRemove(typeDonationId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, TypeDonation Delete - DELETE",
                types:      typeDonationDelete
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