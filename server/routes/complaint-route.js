const router = require('express').Router()

const { 

    getComplaints,
    createComplaint,
    updateComplaint,
    deleteComplaint

} = require('../controllers/complaint-controller');

// GET - Animals
router.get('/', getComplaints);

// POST - Animals
router.post('/', createComplaint);

// PUT - Animals
router.put('/:complaintId', updateComplaint);

// DELETE - Animals
router.delete('/:complaintId', deleteComplaint);

module.exports = router;