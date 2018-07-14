// TypeAnimal Routes
const router = require('express').Router();

const {
    getBreeds,
    createBreed,
    updateBreed,
    deleteBreed
} = require('../../controllers/master-detail/types-breeds-controller')

// GET TypeAnimal
router.get('/', getBreeds);

// POST TypeAnimal
router.post('/', createBreed);

// PUT TypeAnimal
router.put('/:breedId', updateBreed);

// DELETE TypeAnimal
router.delete('/:breedId', deleteBreed);

module.exports = router;






/*

router.get('/', (req, res) => {
    
    BreedModel.find({})
        .populate('typeAnimal')
        .exec( (err, breed) => {
           
            res.json({
                Ok: true,
                breed: breed
            })
        })  
})          


// ==================== POST - Guardar Raza con TypeAnimal ====================

router.post('/', (req, res) => {

    var body = req.body;  
    var animal = req.body.animal;  

    if(!body.name || !animal ) {
        return res.status(500).json({
            Ok:         false,
            status:     500, 
            mensaje:    'Ups! Breed don´t saved. Field Unknown. - POST Breed'
        }); 
    }

    var breed = new BreedModel({
        breed_name: body.name,
        typeAnimal: animal
    })

    AnimalTypeModel.find({ animal }, (err, animalExist) => {
        
        if(err) { 
            return res.status(500).json({
                Ok:         false,
                status:     500,
                message:    "Ups! Database error. POST - Breed",
                error:      err                
            })            
        }
        
        breed.save( (err, breedSaved) => {
            
            if(err) {
                return res.status(400).json({
                    Ok:         false,
                    status:     400, 
                    mensaje:    'Wrong! Breed don´t saved. Error server - POST Breed ',  
                    errors:      err 
                }); 
            }
            
            BreedModel
                .findById(breedSaved._id)
                .populate('typeAnimal').exec((err, typeAnimal)=>{

                if(err) {
                    return res.status(400).json({
                        Ok:         false,
                        status:     400, 
                        mensaje:    'Wrong! ID TypeAnimal no found. Error server - POST Breed ',  
                        errors:      err 
                    }); 
                }

                res.status(200).json({
                    Ok:         true,
                    status:     200,
                    mensaje:    'Congratulation! Breed created successfully - POST Breed !',
                    breed:      typeAnimal
                }); 
            })
        })
    })
})



// ==================== PUT - Actualizar Raza con TypeAnimal ====================

router.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;      
    
    console.log("Id ", id);
    console.log("Body ", body.name + " Animal: ", body.animal);

    
    if(body.name == '' || body.animal == '' ) {
        return res.status(500).json({
            Ok:         false,
            status:     500, 
            mensaje:    'Ups! Breed don´t saved. Field Unknown. - POST Breed'
        }); 
    }        

    BreedModel.findById(id, (err, breed) => {
        
        if(err) {
            return res.status(400).json({
                Ok:         false,
                status:     400, 
                mensaje:    'Wrong! ID TypeAnimal no found. Error server - PUT Breed ',  
                errors:      err 
            }); 
        }
        
        breed.breed_name = body.name;
        breed.typeAnimal = body.animal;
        breed.save( (err, breedUpdate) => {

            if(err) {
                return res.status(400).json({
                    Ok:         false,
                    status:     400, 
                    mensaje:    'Wrong! ID TypeAnimal no found. Error server - POST Breed ',  
                    errors:      err 
                }); 
            }
            
            BreedModel
                .findById(breedUpdate._id)
                .populate('typeAnimal').exec( (err, typeAnimal) => {
                    res.status(200).json({
                        Ok:         true,
                        status:     200,
                        mensaje:    'Congratulation! Breed update successfully - PUT Breed !',
                        breed:      typeAnimal
                }); 
            })
        })          
    })
})


// ==================== PUT - Actualizar Raza con TypeAnimal ====================

router.delete('/:id', (req, res) => {

    var id = req.params.id;        

    BreedModel.findByIdAndRemove(id, (err, breedDelete)=>{

        if (err) {
            return res.status(500).json({
                OK:         false,
                status:     500,
                mensaje:    'Wrong! Breed don´t deleted. Error server - DELETE Breed',
                error: err  
            })
        }

        if(!breedDelete) {
            return res.status(500).json({
                OK:         false,
                status:     500,
                mensaje:    'Wrong! Breed don´t deleted. ID don´t exists - DELETE Breed',
                error: err  
            })
        }

        BreedModel
            .findById(breedDelete._id)
            .populate('typeAnimal').exec( (err, typeAnimal) => {
                res.status(200).json({
                    Ok:         true,
                    status:     200,
                    mensaje:    'Congratulation! Breed deleted successfully - DELETE Breed !',
                    breed:      typeAnimal
            }); 
        })        
    
    })

})


module.exports = router;

*/