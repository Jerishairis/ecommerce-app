const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);


mongoose.connect("mongodb+srv://capstone2:capstone2@capstone2.ptoah9u.mongodb.net/?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


mongoose.connection.once('open', () => console.log('Now connected to Bugnon-Mongo DB Atlas.'));

app.listen(process.env.PORT || 8000, () => 
	{console.log(`API is now online on port ${process.env.PORT || 8000 }`)
});



