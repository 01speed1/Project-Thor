const donationFoodModel = require('../../models/donation_types/donation-food-model');

module.exports = {

    getDonationFoodsAll: async (req, res) => {        
        try {
            let donationFoods = await donationFoodModel.find();    

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationFood - GET",
                donationFoods:  donationFoods
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })

        }
    },

    createDonationFood: async (req, res) => {
        try {
            let body = req.body;
            let donationFood =  new donationFoodModel(body);
                                await donationFood.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationFood - POST",
                donationFoods:  donationFood
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateDonationFood: async (req, res) => {
        try {
            let { donationFoodId } = req.params;
            let body               = req.body;  
            let donationFoodUpdate = await donationFoodModel.findByIdAndUpdate(donationFoodId, body);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationFood - PUT",
                donationFoods:  donationFoodUpdate
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })

        }
    },

    deleteDonationFood: async (req, res) => {
        try {
            let { donationFoodId } = req.params;
            let donationFood       = await donationFoodModel.findByIdAndRemove(donationFoodId);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationFood - DELETE",
                donationFood:   donationFood
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