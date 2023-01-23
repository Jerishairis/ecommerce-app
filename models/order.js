const mongoose = require ("mongoose");

const orderSchema = new mongoose.Schema({
	userId : {
		type: String
	},
	products: [
		{
			productId: {
				type: String,
				required: [true, "Product Name is required"]
			},
			quantity: {
				type: Number,
				required: [true, "Quantity is required"]
			}
		}
	],
	purchasedOn: {
		type: Date,
		default: new Date()
	}
});

module.exports = mongoose.model("Order", orderSchema);
