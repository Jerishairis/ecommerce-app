const express = require("express");
const router = express.Router();
const productController = require("../controller/productController.js");
const auth = require("../auth.js");


router.post("/addproduct", auth.verify, (request, response) => { 
	const data = {
		product: request.body,
		isAdmin: auth.decode(request.headers.authorization).isAdmin
	}

	productController.addProduct(data).then(resultFromController => response.send(resultFromController));
});


router.get("/allproducts", (request, response) => {
	productController.getAllProducts().then(resultFromController => response.send(resultFromController));
});













module.exports = router;