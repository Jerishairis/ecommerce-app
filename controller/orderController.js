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
                },
                totalAmount: data.totalAmount
        })

       return order.save().then((order, err) => {
            if (err) {
                return err;
            }
            else {
                return order;
            }
        })
    }
    else{
        let message = Promise.resolve('Admin is not allowed to place an order');
        return message.then(value => value);
    }
}

/*
module.exports.createOrder = (data) => {
    if(data.isAdmin == false) {
        let order = new Order ({
            userId: data.userId,
                products: [{
                    productId: data.productId,
                    quantity: data.quantity,
                }],
                totalAmount: data.totalAmount,
        })

       return order.save().then((order, err) => {
            if (err) {
                return err;
            }
            else {
                return order;
            }
        })
    }
    else{
        let message = Promise.resolve('User must be a regular user to create an order');
        return message.then(value => value)
    }
}*/
