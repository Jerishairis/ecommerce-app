const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

router.post("/register", (request, response) => {
	userController.registerUser(request.body).then(resultFromController => response.send(resultFromController))
});

router.post("/login", (request, response) => {
	userController.loginUser(request.body).then(resultFromController => response.send(resultFromController))
});


















module.exports = router;