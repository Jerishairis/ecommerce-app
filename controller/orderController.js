const Product = require('../models/product.js');
const Order = require("../models/order.js");
const auth = require('../auth');
const bcrypt = require('bcrypt');


module.exports.createOrder = (data) => {
    if(data.isAdmin == false) {
        let order = new Order ({
            userId: data.userId,
                products: {
                    productId: data.productId,
                    quantity: data.quantity,
                }
        })

       return order.save().then((order, err) => {
        return (err) ? false : true;
        })
    }
    else{
        let message = Promise.resolve('Admin is not allowed to place an order');
        return message.then(value => value);
    }
}

