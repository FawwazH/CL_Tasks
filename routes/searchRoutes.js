const { response } = require('express');
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.getSearchResults)




module.exports = router;