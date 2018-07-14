// TypeDonation Routes
const router = require('express').Router();

const {
    
    getTypeObject,
    createTypeObject,
    updateTypeObject,
    deleteTypeObject

} = require('../../controllers/master-detail/types-objects-controller')

// GET TypeDonation
router.get('/', getTypeObject);

// POST TypeDonation
router.post('/', createTypeObject);

// PUT TypeDonation
router.put('/:typeObjectId', updateTypeObject);

// DELETE TypeDonation
router.delete('/:typeObjectId', deleteTypeObject);

module.exports = router;
