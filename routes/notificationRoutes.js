const express = require('express');
const viewsController = require('../controllers/viewsController.js');
const taskController = require('../controllers/taskController');
const router = express.Router();


router.get('/', viewsController.getNotificationPage)

router.get('/sendReminders', taskController.sendReminders);

module.exports = router;