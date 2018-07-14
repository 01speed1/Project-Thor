const router = require('express').Router();

const {

    getDonationObjectsAll,
    createDonationObject,
    deleteDonationObject,
    updateDonationObject

} = require('../../controllers/donations-types/donation-object-controller')

// GET
router.get('/', getDonationObjectsAll);

// POST
router.post('/', createDonationObject);

// PUT
router.put('/:donationObjectId', updateDonationObject);

// DELETE
router.delete('/:donationObjectId', deleteDonationObject);

module.exports = router;

