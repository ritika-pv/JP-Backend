const express = require("express")
const app = express();

app.use(express.json())
//Route imports
const categories  = require('./routes/home_routes')
app.use("/api",categories)
module.exports = app;