const mongoose = require("mongoose");



const connectDatabase=()=>{
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).
then((data)=>{console.log(`MongoDb Connected Ka Host ${data.connection.host}`);
})
//catch kar denge toh unhandeled nahi hoga na 
//no need of this because we handeled the unhandeled promise rejection
// .catch((err)=>{
//     console.log(err)
// })
}
module.exports = connectDatabase;