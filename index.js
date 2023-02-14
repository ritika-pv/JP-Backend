const app = require('./app');
const env = require("dotenv");
const connectDatabase = require('./config/database');



//config
env.config({path:"config/config.env"})

//connectingDb
connectDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on ${process.env.PORT}`)
})



//Unhandled Promise Rejection
//server band ho jayega faltu load nahi lega sending load load load .....no ab ye nahi hoga
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down server due to unhandeled promise rejection");
    server.close(()=>{
        process.exit();
    })
})