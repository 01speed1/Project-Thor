const breedModel = require('../../models/master_detail/types-breeds-model');
const typeModel = require('../../models/master_detail/types-animals-model');

module.exports = {

    getBreeds: async (req, res) => { 
        const breed = await breedModel.find({}).populate('animal');  // Para llamar la relación, se debe apuntar al nombre del campo de la tabla relacionada. En este caso, (animal) es la relacion a Types.
            res.status(200).json({ 
                Ok:         true,   
                message:    "Congratulations, Breeds List - GET",
                breeds:     breed                
            })                
    },

    createBreed: async (req, res) => {  
        try {
            const typeId = req.body.animal;
                    
            const type   = await typeModel.findById( typeId );            
            const breed  = new breedModel(req.body);
                  breed.animal = type;
                  await breed.save();
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, Breed Save - POST",
                breed:      breed
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - POST", 
                error:      error                
            })
        }      
        
    },

    updateBreed: async (req, res) => {
        try {            
            const { breedId }  = req.params;                                                                    
            const breedUpdate  = await breedModel.findByIdAndUpdate(breedId, req.body); 
            
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, Breed Update - PUT",
                types:      breedUpdate
            });
        } catch (error) {
            return res.status(500).json({
                Ok:         false,
                message:    "Ups! It's has a occured an error - PUT", 
                error:      error                
            })
        }
    },

    deleteBreed: async (req, res) => {
        try {
            const { breedId } = req.params;
            const breedDeleted = await breedModel.findByIdAndRemove(breedId);
            res.status(200).json({
                Ok:         true,
                message:    "Congratulations, Breed Delete - DELETE",
                types:      breedDeleted
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