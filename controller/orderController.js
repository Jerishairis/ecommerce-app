const mongoose = require("mongoose");
const Order = require("../models/order.js");

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

       return newOrder.save().then((newOrder, err) => {
            if (err) {
                return err;
            }
            else {
                return newOrder;
            }
        })
    }
    else{
        let message = Promise.resolve('User must be a regular user to create an order');
        return message.then(value => value)
    }
}
