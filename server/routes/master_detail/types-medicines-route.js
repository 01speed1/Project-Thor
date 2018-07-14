// TypeMedicine Routes
const router = require('express').Router();

const {
    getTypeMedicine,
    createTypeMedicine,
    updateTypeMedicine,
    deleteTypeMedicine

} = require('../../controllers/master-detail/types-medicines-controller');


// GET TypeDonation
router.get('/', getTypeMedicine);

// POST TypeDonation
router.post('/', createTypeMedicine);

// PUT TypeDonation
router.put('/:typeMedicineId', updateTypeMedicine);

// DELETE TypeDonation
router.delete('/:typeMedicineId', deleteTypeMedicine);

module.exports = router;