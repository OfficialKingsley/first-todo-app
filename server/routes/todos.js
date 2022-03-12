const express = require("express");
const router = express.Router();

//Controllers
const {
  getTodos,
  addTodos,
  deleteTodos,
  updateTodos,
} = require("./controllers/todos");

// ----- Router Requests ----- //
router.get("/", getTodos);

router.post("/", addTodos);

router.put("/:id", updateTodos);

router.delete("/:id", deleteTodos);

module.exports = router;
