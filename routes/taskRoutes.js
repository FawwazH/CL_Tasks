const express = require('express');
const taskController = require('../controllers/taskController.js');
const router = express.Router();

router.post('/createTask', taskController.createTask);



module.exports = router;