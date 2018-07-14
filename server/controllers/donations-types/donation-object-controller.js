const donationObjectModel = require('../../models/donation_types/donation-objects-model');

module.exports = {

    getDonationObjectsAll: async (req, res) => {        
        try {
            let donationObjects = await donationObjectModel
                                        .find()
                                        .populate('type_object_id');    

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationObject - GET",
                donationObjects:  donationObjects
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })

        }
    },

    createDonationObject: async (req, res) => {
        try {
            let body = req.body;
            let donationObject =  new donationObjectModel(body);
                                await donationObject.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationObject - POST",
                donationObjects:  donationObject
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateDonationObject: async (req, res) => {
        try {
            let { donationObjectId } = req.params;
            let body                = req.body;  
            let donationObjectUpdate = await donationObjectModel.findByIdAndUpdate(donationObjectId, body);
            donationObjectUpdate     = await donationObjectModel.findById(donationObjectUpdate._id).populate('type_object_id')
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationObject - PUT",
                donationObjects:  donationObjectUpdate
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })

        }
    },

    deleteDonationObject: async (req, res) => {
        try {
            let { donationObjectId } = req.params;
            let donationObject       = await donationObjectModel.findByIdAndRemove(donationObjectId);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationBlood - DELETE",
                donationObject:   donationObject
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