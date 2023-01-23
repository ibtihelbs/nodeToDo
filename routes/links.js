const express = require("express");
const router= express.Router();
const { allTasks, createTask, deleteTask, editTask, singleTask } = require("../controllers/tasks");

router.route('/').get(allTasks).post(createTask);
router.route('/:id').get(singleTask).patch(editTask).delete(deleteTask);

module.exports = router;