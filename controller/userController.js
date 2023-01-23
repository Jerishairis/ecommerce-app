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


module.exports.getUserDetails = (userId) => {
	return User.findById(userId).then((details, err) => {
		if (err){
			return false;
		}
		else {
			details.password = "";
			return details;
		}
	})
};


// Retreive user details
module.exports.getProfile = (userData) => {
	return User.findById(userData.id).then(result => {
		// console.log(data.userId);
		// console.log(result);
		
		if (result == null) {
			return false
		} else {
			result.password = "*****"

			// Returns the user information with the password as an empty string or asterisk.
			return result
		}
	})
};



module.exports.checkUsernameExist = (reqBody) => {
	// ".find" - a mongoose crud operation (query) to find a field value from a collection
	return User.find({username: reqBody.username }).then(result => {
		// condition if there is an exsiting  user
		if(result.length > 0){
			return true;
		}
		// condition if there is no existing user
		else
		{
			return false;
		}
	})
};

