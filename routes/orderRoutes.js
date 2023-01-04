const express = require("express");
const router = express.Router();
const auth = require('../auth.js');


router.post("/new-order", auth.verify, (req, res) => {
	const data = {
		userId: auth.decode(req.headers.authorization).id,
       	productId: req.body.productId,
        quantity: req.body.quantity,
        totalAmount: req.body.totalAmount,
        isAdmin: auth.decode(req.headers.authorization.isAdmin)
	}
	oderController.createOrder(data).then(resultFromController => res.send(resultFromController))
});


module.exports = router;