const express = require("express")
const app = express();
const errorHandler=require("./middleware/error")
app.use(express.json())
//Route imports
// Category
const categories  = require('./routes/home_routes')
app.use("/api",categories)

// Menu
const menu = require('./routes/menu_routes');
app.use("/api",menu);


//Middleware for error
app.use(errorHandler)
module.exports = app;