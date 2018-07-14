// TypeAnimal Routes
const router = require('express').Router();

const {
    
    getTypesAnimal,
    createTypeAnimal,
    updateTypeAnimal,
    deleteTypeAnimal

} = require('../../controllers/master-detail/types-animals-controller')

// GET TypeAnimal
router.get('/', getTypesAnimal);

// POST TypeAnimal
router.post('/', createTypeAnimal);

// PUT TypeAnimal
router.put('/:typeId', updateTypeAnimal);

// DELETE TypeAnimal
router.delete('/:typeId', deleteTypeAnimal);

module.exports = router;
