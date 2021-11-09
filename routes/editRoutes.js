const express = require('express');
const viewsController = require('../controllers/viewsController.js');
const taskController = require('../controllers/taskController.js');
const router = express.Router();

router.route('/:itemTitle')
    .get(viewsController.getEditPage)
    .patch(taskController.updateTask);





module.exports = router;