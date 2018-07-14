const router = require('express').Router();

const {

    getDonationMoneysAll,
    createDonationMoney,
    updateDonationMoney,
    deleteDonationMoney

} = require('../../controllers/donations-types/donation-money-controller')

// GET
router.get('/', getDonationMoneysAll);

// POST
router.post('/', createDonationMoney);

// PUT
router.put('/:donationMoneyId', updateDonationMoney);

// DELETE
router.delete('/:donationMoneyId', deleteDonationMoney);

module.exports = router;

