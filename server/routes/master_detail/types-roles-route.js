// TypeDonation Routes
const router = require('express').Router();

const {
    
    getTypeRol,
    createTypeRol,
    updateTypeRol,
    deleteTypeRol

} = require('../../controllers/master-detail/types-roles-controller')

// GET TypeDonation
router.get('/', getTypeRol);

// POST TypeDonation
router.post('/', createTypeRol);

// PUT TypeDonation
router.put('/:typeRolId', updateTypeRol);

// DELETE TypeDonation
router.delete('/:typeRolId', deleteTypeRol);

module.exports = router;
