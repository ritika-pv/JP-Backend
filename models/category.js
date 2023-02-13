const mongoose = require('mongoose');

const category =new mongoose.Schema({
    category_name:{type:String,required:[true,"Please Enter Category Name"]},
    slug:{type:String,required:true,unique:true,index:true},
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
    images:{public_id:{type:String,required:true},url:{type:String,required:true}},
    
});

category.pre('validate',function(next){
    if(this.category_name){
        this.slug = this.category_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }
    next();
});
const Category = mongoose.model('Category',category);
module.exports = Category;