const express = require("express");
const {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
  markTodoCompleted,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", editTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/complete", markTodoCompleted);

module.exports = router;
