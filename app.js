const express = require("express")
const app = express();
const cookieParser=require("cookie-parser");


const errorHandler=require("./middleware/error")
app.use(express.json());
app.use(cookieParser());
//Route imports
// Category
const categories  = require('./routes/home_routes')
app.use("/api",categories)

// Menu
const menu = require('./routes/menu_routes');
app.use("/api",menu);
const user =require("./routes/user_routes");
app.use("/api",user);
const order=require("./routes/order_routes");
app.use("/api",order);
//Middleware for error
app.use(errorHandler)
module.exports = app;