// TypeDonation Routes
const router = require('express').Router();

const {
    
    getTypeComplaint,
    createTypeComplaint,
    updateTypeComplaint,
    deleteTypeComplaint

} = require('../../controllers/master-detail/types-complaints-controller')

// GET TypeDonation
router.get('/', getTypeComplaint);

// POST TypeDonation
router.post('/', createTypeComplaint);

// PUT TypeDonation
router.put('/:typeComplaintId', updateTypeComplaint);

// DELETE TypeDonation
router.delete('/:typeComplaintId', deleteTypeComplaint);

module.exports = router;
