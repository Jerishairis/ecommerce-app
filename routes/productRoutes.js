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


router.get("/:productId", (request, response) => {
	productController.getProduct(request.params.productId).then(resultFromController => response.send(resultFromController));
}); 

router.get('/', (request, response) => {
	productController.getActiveProduct().then(resultFromController => response.send(resultFromController))
})

router.patch("/update/:productId", auth.verify, (request,response) => {
	const newData = {
		product: request.body,
		isAdmin: auth.decode(request.headers.authorization).isAdmin
	}

	productController.updateProduct(request.params.productId, newData).then(resultFromController => {
		response.send(resultFromController)
	});
});

router.patch("/archive/:productId", auth.verify, (request, response) => { 
	const productId = request.params.productId
	const isActive = request.body.isActive

	productController.archiveProduct(productId, isActive).then(resultFromController => {
		response.send(resultFromController)
	});
});









module.exports = router;