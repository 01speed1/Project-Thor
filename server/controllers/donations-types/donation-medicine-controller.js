const donationMedicineModel = require('../../models/donation_types/donation-medicine-model');

module.exports = {

    getDonationMedicinesAll: async (req, res) => {        
        try {
            let donationMedicines = await donationMedicineModel.find({}).populate('typeMedicine'); 

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - GET",
                donationMedicines:  donationMedicines
            })

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })

        }
    },

    createDonationMedicine: async (req, res) => {
        try {
            let body = req.body;
            let medicine =  new donationMedicineModel({
                typeMedicine   : body.typeMedicine,
                quantity       : body.quantity,
                lote           : body.lote,
                expires        : body.expires,
                laboratory     : body.laboratory,
                
            });
                            await medicine.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - POST",
                donationMedicines:  donationMedicine
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },


    updateDonationMedicine: async (req, res) => {
        try {     

            let { medicineId }   = req.params;
            let body             = req.body;               

            let medicineUpdate = {
                typeMedicine: body.typeMedicine,
                quantity    : body.quantity,           
                lote        : body.lote,
                expires     : body.expires,
                laboratory  : body.laboratory
            }                
                    
             await donationMedicineModel.findByIdAndUpdate(medicineId, medicineUpdate);                                  
             let medicineUpdated = await donationMedicineModel.findById(medicineId);    

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - PUT",
                donationMedicines:  medicineUpdated
            });

        } catch (error) {
            
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })

        }
    },

    deleteDonationMedicine: async (req, res) => {
        try {
            let { medicineId }   = req.params;
            let donationMedicine = await donationMedicineModel.findByIdAndRemove(medicineId);
            
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, donationMedicine - DELETE",
                donationMedicine:   donationMedicine
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