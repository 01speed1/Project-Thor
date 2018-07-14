const donationBloodModel = require('../../models/donation_types/donation-blood-model');

module.exports = {

    getDonationBloodsAll: async (req, res) => {        
        try {
            let donationBloods = await donationBloodModel
                                        .find()
                                        .populate('rh_id');    

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationFood - GET",
                donationBloods:  donationBloods
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })

        }
    },

    createDonationBlood: async (req, res) => {
        try {
            let body = req.body;
            let donationBlood =  new donationBloodModel(body);
                                await donationBlood.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationBlood - POST",
                donationBloods:  donationBlood
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateDonationBlood: async (req, res) => {
        try {
            let { donationBloodId } = req.params;
            let body                = req.body;  
            let donationBloodUpdate = await donationBloodModel.findByIdAndUpdate(donationBloodId, body);
            donationBloodUpdate     = await donationBloodModel.findById(donationBloodUpdate._id).populate('rh_id')
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationBlood - PUT",
                donationBloods:  donationBloodUpdate
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })

        }
    },

    deleteDonationBlood: async (req, res) => {
        try {
            let { donationBloodId } = req.params;
            let donationBlood       = await donationBloodModel.findByIdAndRemove(donationBloodId);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationBlood - DELETE",
                donationBlood:   donationBlood
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