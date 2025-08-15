
const express=require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/caseController');

router.get('/', auth, controller.listCases);
router.post('/', auth, controller.createCase);
router.get('/:id', auth, controller.getCase);
router.patch('/:id', auth, controller.updateCase);
router.delete('/:id', auth, controller.deleteCase);

module.exports = router;