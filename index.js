// dependencies
const express = require("express");
const mongoose = require("mongoose");


// routers
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");

// to create a express server/application
const app = express();

// to read json objects
app.use(express.json());
// to read forms
app.use(express.urlencoded({extended:true}));

// Initializing the routes
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);

// Connect to our MongoDB Database
mongoose.connect("mongodb+srv://capstone2:capstone2@capstone2.ptoah9u.mongodb.net/?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Prompts a message once connected
mongoose.connection.once('open', () => console.log('Now connected to Bugnon-Mongo DB Atlas.'));

// Prompts a message once connected to port 4000
app.listen(process.env.PORT || 4000, () => 
	{console.log(`API is now online on port ${process.env.PORT || 4000 }`)
});


// 3000, 4000, 5000, 8000 - Port numbers for Web applications

