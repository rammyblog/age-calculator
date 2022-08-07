const router = require('express').Router();
const ageController = require('./controller/dob.controller.js');

router.get('/', ageController);

module.exports = router;
