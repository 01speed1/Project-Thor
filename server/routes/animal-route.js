const router = require('express').Router()

const { 

    getAnimals,
    createAnimal,
    updateanimal,
    deleteanimal

} = require('../controllers/animal-controller');

// GET - Animals
router.get('/', getAnimals);

// POST - Animals
router.post('/', createAnimal);

// PUT - Animals
router.put('/:animalId', updateanimal);

// DELETE - Animals
router.delete('/:animalId', deleteanimal);


module.exports = router;