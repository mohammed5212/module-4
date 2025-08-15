const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/customerController');

router.get('/', auth, controller.listCustomers);
router.post('/', auth, controller.createCustomer);
router.get('/:id', auth, controller.getCustomer);
router.patch('/:id', auth, controller.updateCustomer);
router.delete('/:id', auth, controller.deleteCustomer);

module.exports = router;