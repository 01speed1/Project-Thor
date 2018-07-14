const router = require('express').Router()


const { 
    getDonationController,
    createDonation

} = require('../controllers/donation-controller')

// GET
router.get('/', getDonationController);

// POST
router.post('/', createDonation);


module.exports = router;