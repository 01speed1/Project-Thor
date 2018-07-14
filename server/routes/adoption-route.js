const router = require('express').Router()

const { 

    getAdoptionsAll,
    createAdoption,
    updateAdoption,
    deleteAdoption,
    updateStateAnimalAndAdoption

} = require('../controllers/adoption-controller');

// GET 
router.get('/', getAdoptionsAll);

// POST 
router.post('/', createAdoption);

// PUT 
router.put('/:adoptionId', updateAdoption);

// DELETE 
router.delete('/:adoptionId', deleteAdoption);

// PUT Update Adoption
router.put('/update/:adoptionId', updateStateAnimalAndAdoption)

module.exports = router;