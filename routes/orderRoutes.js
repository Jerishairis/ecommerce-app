const express = require("express");
const router = express.Router();
const auth = require('../auth.js');
const orderController = require("../controller/orderController.js");


router.post("/new-order", auth.verify, (req, res) => {
	authData = auth.decode(req.headers.authorization);

	const data = {
		userId: authData.id,
       	productId: req.body.productId,
        quantity: req.body.quantity,
        isAdmin: authData.isAdmin
	}
	orderController.createOrder(data).then(resultFromController => res.send(resultFromController))
});


module.exports = router;



