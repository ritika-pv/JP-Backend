const mongoose = require('mongoose');

const menuItem = new mongoose.Schema({
    menu_category_id:[{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true}],
    name:{type:String,required:[true,"Please Enter Menu Name"]},
    slug:{type:String,required:true,unique:true,index:true},
    delivered_from: { type: Date, required:[true,"Please Enter delivery time"]},
    delivered_to: { type: Date, required:[true,"Please Enter delivery time"]},
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
    images:{public_id:{type:String,required:true},url:{type:String,required:true}}
});


menuItem.pre('validate',function(next){
    if(this.category_name){
        this.slug = this.category_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }
    next();
});
const MenuItem = mongoose.model('MenuItem',menuItem);
module.exports = MenuItem;