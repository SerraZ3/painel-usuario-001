const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

// GET localhost:3000/user/create
router.get("/create", userController.create);
// POST localhost:3000/user/create
router.post("/create", userController.store);

// GET localhost:3000/user/edit/1
router.get("/edit/:id", userController.edit);
// PUT localhost:3000/user/edit/1
router.put("/edit/:id", userController.update);
// PATCH localhost:3000/user/edit/1
router.patch("/edit/:id", userController.update);

// GET localhost:3000/user/delete/1
router.get("/delete/:id", userController.delete);
// DELETE localhost:3000/user/delete/1
router.delete("/delete/:id", userController.destroy);

// GET localhost:3000/user/
router.get("/", userController.index);
// GET localhost:3000/user/4
router.get("/:id", userController.show);

module.exports = router;
