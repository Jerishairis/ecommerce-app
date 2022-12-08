const mongoose = require("mongoose");
const Product = require("../models/product.js");



module.exports.addProduct = (data) => {
	console.log(data.isAdmin)

	if(data.isAdmin) {
		let newProduct = new Product({
			name: data.product.name,
			description: data.product.description,
			price: data.product.price
		});
		return newProduct.save().then((newProduct, error) => {
			if(error) {
				return error;
			}
			return newProduct;
		});
	}
};

module.exports.getAllProducts = () => {
	return Product.find({}).then(result => {
		return result
	})
};