const donationModel = require('../models/donation-model');
const typeDonation     = require('../models/master_detail/types-donations-model')

module.exports = { 

    // GET
    getDonationController: async (req, res) => {
        try {
            let donation = await donationModel.find({}).populate('type_donation donations user')

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donation - GET",
                donation:        donation
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })
        }
    },



    // POST 
    createDonation: async (req, res) => {

        try {

            let body = req.body;
            let donation = new donationModel(body)
                donation = await donation.save()

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donation - POST",
                donation:        donation
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })
        }

    },

    // PUT
    updateDonation: async (req, res) => {
        try {
            let { donationId } = req.params;
            let update         = { };
            let donationupdate = await donationModel.findByIdAndUpdate(donationId, update);
    
            res.json(donationupdate)
            
        } catch (error) {
            
        }

    }


}
