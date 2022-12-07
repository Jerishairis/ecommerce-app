const User = require("../models/user.js");
const Product = require("../models/product.js");
const Order = require("../models/order.js");

const bcrypt = require("bcrypt");
const auth = require("../auth.js");

module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		username: reqBody.username,
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
	})

	return newUser.save().then((user, error) => {
		if(error){
			return false;
		}
		else{
			return true;
		}
	})
};


module.exports.loginUser = (reqBody) => {
	return User.findOne({username : reqBody.username}).then(result => {
		if(result == null){
			return false;
		}
		else{
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

			if(isPasswordCorrect){
				return{access: auth.createAccessToken(result)};
			}
			else{
				return false;
			}
		}
	})
};




