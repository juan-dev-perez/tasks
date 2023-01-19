const router = require('express').Router();
const tasksController = require('../controllers/tasksController');

router.get('/',tasksController.getTask );

module.exports = router;