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
			return (error) ? false : true;
		});
	}
};

module.exports.getAllProducts = () => {
	return Product.find({}).then(result => {
		return result;
	});
};

module.exports.getProduct = (productId) => {
	return Product.findById(productId).then(result => {
		return result;
	})
};

module.exports.getActiveProduct = () => {
	return Product.find({isActive: true}).then(result => {
		return result;
	})
};


module.exports.updateProduct = (productId, newData) => {
	if(newData.isAdmin == true){

		return Product.findByIdAndUpdate(productId,
		{
			name: newData.product.name,
			description: newData.product.description,
			price: newData.product.price
		}).then((updatedProduct, error) => {
			return (error) ? false : true;
		})
	}
	else {
		let message = Promise.resolve("User must be Admin to add update a product");
		return message.then((value) => {return value})
	}
};


module.exports.archiveProduct = (productId, isActive) => {
	return Product.findByIdAndUpdate(productId, { isActive }).then((_, error) => {
		return (error) ? false : true;
	})
};




















