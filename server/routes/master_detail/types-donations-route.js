// TypeDonation Routes
const router = require('express').Router();

const {
    
    getTypeDonation,
    createTypeDonation,
    updateTypeDonation,
    deleteTypeDonation

} = require('../../controllers/master-detail/types-donations-controller')

// GET TypeDonation
router.get('/', getTypeDonation);

// POST TypeDonation
router.post('/', createTypeDonation);

// PUT TypeDonation
router.put('/:typeDonationId', updateTypeDonation);

// DELETE TypeDonation
router.delete('/:typeDonationId', deleteTypeDonation);

module.exports = router;
