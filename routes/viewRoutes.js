const express = require('express');
const viewsController = require('../controllers/viewsController.js');
const router = express.Router();


router.get('/', viewsController.getLandingPage);

router.get('/create', viewsController.getCreatePage);


module.exports = router;