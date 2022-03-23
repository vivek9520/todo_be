const { Router } = require("express");

const userController = require("./../controller/userController");

const router = Router();

router.post("/api/v1/signup", userController.signup);

module.exports = router;
