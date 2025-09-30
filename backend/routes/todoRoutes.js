const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.Todos)
router.post('/create', todoController.createTodo)
router.delete('/delete/:id', todoController.deleteTodo)
router.patch('/edit/:id', todoController.editTodo)
router.patch('/mark/:id', todoController.markTodo)
router.delete('/deleteAllcomplete', todoController.deleteAllCompleted)
router.get('/filter/:type', todoController.filterTodos)

module.exports = router;