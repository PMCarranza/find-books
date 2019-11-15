const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  // findAll and create are functions being exported as a module in controllers -> bookController.js
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
// findById, update and remove are functions being exported as a module in controllers -> bookController.js
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

// The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
module.exports = router;
