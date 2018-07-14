// User Route
const router        = require('express').Router();
const middleware    = require('../middleware/autenticate')
const permissions   = require('../middleware/permission')

const {

    getUsersAll,
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/user-controller');

// GET User
router.get('/', middleware.verifyToken, getUsersAll);

// POST User
router.post('/', createUser);

// PUT User
router.put('/:userId', updateUser);

// DELETE User
router.delete('/:userId', [middleware.verifyToken, permissions.verifyRol]    ,deleteUser);

module.exports = router;