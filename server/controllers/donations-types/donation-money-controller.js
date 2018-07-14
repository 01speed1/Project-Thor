const donationMoneyModel = require('../../models/donation_types/donation-money-model');

module.exports = {

    getDonationMoneysAll: async (req, res) => {        
        try {
            let donationMoney = await donationMoneyModel
                                        .find();    

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMoney - GET",
                donationMoney:  donationMoney
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })

        }
    },

    createDonationMoney: async (req, res) => {
        try {
            let body = req.body;
            let donationMoney =  new donationMoneyModel(body);
                                await donationMoney.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMoney - POST",
                donationMoney:  donationMoney
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateDonationMoney: async (req, res) => {
        try {
            let { donationMoneyId } = req.params;
            let body                = req.body;  
            let donationMoneyUpdate = await donationMoneyModel.findByIdAndUpdate(donationMoneyId, body);
            donationMoneyUpdate     = await donationMoneyModel.findById(donationMoneyUpdate._id)
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMoney - PUT",
                donationMoney:  donationMoneyUpdate
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })

        }
    },

    deleteDonationMoney: async (req, res) => {
        try {
            let { donationMoneyId } = req.params;
            let donationMoney       = await donationMoneyModel.findByIdAndRemove(donationMoneyId);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMoney - DELETE",
                donationMoney:   donationMoney
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