const complaintModel = require('../models/complaint-model');

module.exports = {

    getComplaints: async (req, res) => {        
        try {
            let complaints = await complaintModel.find({})
                                            .populate('user_id type_complaint');    
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, complaints - GET",
                complaints:          complaints
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })
        }
    },

    createComplaint: async (req, res) => {
        try {
            let body   = req.body;
            let complaint =  new complaintModel(body)            
                        await complaint.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, complaint - POST",
                complaints:        complaint
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },

    updateComplaint: async (req, res) => { 
        try {
            let { complaintId }         = req.params;
            let body                    = req.body;

            let complaintUpdate =  await complaintModel.findByIdAndUpdate(complaintId, body);
            complaintUpdate = await complaintModel.findById(complaintUpdate._id).populate('user_id type_complaint')
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, animal - PUT",
                complaint:        complaintUpdate
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })
        }
    },

    deleteComplaint: async (req, res) => {
        try {
            let { complaintId } = req.params;
            let complaint       = await complaintModel.findByIdAndRemove(complaintId);
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, complaint - DELETE",
                complaint:      complaint
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - DELETE", 
                error:          error
            })
        }
    }



}