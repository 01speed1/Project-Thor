
const router = require('express').Router();

const {

    getDonationMedicinesAll,
    createDonationMedicine,
    updateDonationMedicine,
    deleteDonationMedicine

} = require('../../controllers/donations-types/donation-medicine-controller')

// GET
router.get('/', getDonationMedicinesAll);

// POST
router.post('/', createDonationMedicine);

// PUT
router.put('/:medicineId', updateDonationMedicine);

// DELETE
router.delete('/:medicineId', deleteDonationMedicine);


module.exports = router;

