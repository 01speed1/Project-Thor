const animalModel = require('../models/animal-model');

module.exports = {

    getAnimals: async (req, res) => {        
        try {
            let animals = await animalModel.find({})
                                            .populate('typeAnimal',)
                                            .populate('typeRh')
                                            .populate('typeBreed');    
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, animal - GET",
                animals:          animals
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - GET", 
                error:          error
            })
        }
    },

    createAnimal: async (req, res) => {
        try {
            let body   = req.body;
            let animal =  new animalModel(body)            
                        await animal.save();

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, animal - POST",
                animals:        animal
            })
        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - POST", 
                error:          error
            })
        }
    },

    updateanimal: async (req, res) => {
        try {
            let { animalId }            = req.params;
            let body                    = req.body;
            let animalUpdate            =  { }
                animalUpdate.name       = body.name;
                animalUpdate.typeAnimal = body.typeAnimal;
                animalUpdate.typeRh     = body.typeRh;
                animalUpdate.typeBreed  = body.typeBreed;
                animalUpdate.genre      = body.genre;
                animalUpdate.color      = body.color;
                animalUpdate.height     = body.height;
                animalUpdate.typeHeight = body.typeHeight;
                animalUpdate.weight     = body.weight;
                animalUpdate.typeWeight = body.typeWeight;
                animalUpdate.age        = body.age;
                animalUpdate.state      = body.state; 

                                        await animalModel.findByIdAndUpdate(animalId, animalUpdate);

            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, animal - PUT",
                animals:        animalUpdate
            })

        } catch (error) {
            res.status(500).json({
                Ok:             false,
                message:        "Ups! It's has a occured an error - PUT", 
                error:          error
            })
        }
    },

    deleteanimal: async (req, res) => {
        try {
            let { animalId } = req.params;
            let animal       = await animalModel.findByIdAndRemove(animalId);
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, animal - DELETE",
                animal:           animal
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