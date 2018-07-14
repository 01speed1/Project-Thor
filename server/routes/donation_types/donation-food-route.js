const router = require('express').Router();

const {

    getDonationFoodsAll,
    createDonationFood,
    updateDonationFood,
    deleteDonationFood

} = require('../../controllers/donations-types/donation-food-controller')

// GET
router.get('/', getDonationFoodsAll);

// POST
router.post('/', createDonationFood);

// PUT
router.put('/:donationFoodId', updateDonationFood);

// DELETE
router.delete('/:donationFoodId', deleteDonationFood);

module.exports = router;

