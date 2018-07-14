const adoptionModel = require('../models/adoption-model')
const animalModel   = require('../models/animal-model')

module.exports = {

    getAdoptionsAll: async (req, res) => {        
        try {
            let adoptions = await adoptionModel.find({}).populate('animal user');    
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, Adoption - GET",
                adoptions:       adoptions
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })
        }
    },

    createAdoption: async (req, res) => {
        try {
            let body = req.body;
            let adoption =  new adoptionModel(body);
                            await adoption.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, Adoption - POST",
                Adoptions:       adoption
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },

    // Recuerde que el ID del usuario se captura o por token o por la sesión.
    updateAdoption: async (req, res) => {
        try {
            let { adoptionId } = req.params;
            let body           = req.body;
            let adoptionUpdate =  { }      
                adoptionUpdate.animal = body.animal;
                adoptionUpdate.user   = body.user;                  

                                 await adoptionModel.findByIdAndUpdate(adoptionId, adoptionUpdate);
            let response       = await adoptionModel.find({}).populate('animal user')
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, User - PUT",
                Adoptions:      response
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })
        }
    },

    deleteAdoption: async (req, res) => {
        try {
            let { adoptionId } = req.params;
            let adoption       = await adoptionModel.findByIdAndRemove(adoptionId);

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, Adoption - DELETE",
                adoption:       adoption
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - DELETE", 
                error:          error
            })
        }
    },

    updateStateAnimalAndAdoption: async (req, res) => {
        let { adoptionId }  = req.params;                
        let adoption        = await adoptionModel.findById(adoptionId);   

        let animalId        = adoption.animal;
        
        let animal          = await animalModel.findById(animalId)        
        
        let adopted         = animal.adopted;

                            await animalModel.findByIdAndUpdate(animalId, {adopted: !adopted})

                            await adoptionModel.findByIdAndUpdate(adoptionId, {confirmed: !adoption.confirmed})

        let upgrade         = await adoptionModel.find({}).populate('animal user')        
        

        res.status(200).json({
            Ok:             true,
            message:        "Congratulations, Adoption - UPDATE STATE ANIMAL",
            adoption:       upgrade
        })        

    }
    
};


