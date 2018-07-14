// TypeRh Routes
const router = require('express').Router();

const {
    
    getTypeRh,
    createTypeRh,
    updateTypeRh,
    deleteTypeRh

} = require('../../controllers/master-detail/types-rhs-controller')

// GET TypeRh
router.get('/', getTypeRh);

// POST TypeRh
router.post('/', createTypeRh);

// PUT TypeRh
router.put('/:typeRhId', updateTypeRh);

// DELETE TypeRh
router.delete('/:typeRhId', deleteTypeRh);

module.exports = router;
