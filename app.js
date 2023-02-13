const express = require("express")
const app = express();
const errorHandler=require("./middleware/error")
app.use(express.json())
//Route imports
const categories  = require('./routes/home_routes')
app.use("/api",categories)


//Middleware for error
app.use(errorHandler)
module.exports = app;