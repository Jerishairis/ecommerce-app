const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");
const auth = require("../auth.js");

router.post("/register", (request, response) => {
	userController.registerUser(request.body).then(resultFromController => response.send(resultFromController))
});

router.post("/login", (request, response) => {
	userController.loginUser(request.body).then(resultFromController => response.send(resultFromController))
});


router.get("/:id/userDetails", (request, response) => {
	userController.getUserDetails(request.params.id).then(resultFromController => response.send(resultFromController))
});


// Route for retrieving user details
router.get("/details", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);
		console.log(userData)
		console.log(req.headers.authorization);
	userController.getProfile({id: userData.id}).then(resultFromController => res.send(resultFromController))
});


router.post("/checkUsername", (req, res) => {
	userController.checkUsernameExist(req.body).then(resultFromController => res.send(resultFromController))
});









module.exports = router;