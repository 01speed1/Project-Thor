const router = require('express').Router();

const {

    getDonationBloodsAll,
    createDonationBlood,
    updateDonationBlood,
    deleteDonationBlood

} = require('../../controllers/donations-types/donation-blood-controller')

// GET
router.get('/', getDonationBloodsAll);

// POST
router.post('/', createDonationBlood);

// PUT
router.put('/:donationBloodId', updateDonationBlood);

// DELETE
router.delete('/:donationBloodId', deleteDonationBlood);

module.exports = router;

