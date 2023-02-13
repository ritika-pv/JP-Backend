const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  });
  
const Counter = mongoose.model('Counter', CounterSchema);
const category =new mongoose.Schema({
    id:{type:Number},
    //i dont know how to fetch menu id
    menu_category_id:{type:Number,required:[true,"Please enter the category id"]},
    name:{type:String,required:[true,"Please Enter Menu Name"]},
    slug:{type:String,required:true,unique:true,index:true},
    delivered_from: { type: Date, required:[true,"Please Enter delivery time"]},
    delivered_to: { type: Date, required:[true,"Please Enter delivery time"]},
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
    images:{public_id:{type:String,required:true},url:{type:String,required:true}}
});

category.pre('save',function(next){
    const doc = this;
    Counter.findByIdAndUpdate({ _id: 'categoryId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
      .then(counter => {
        doc.id = counter.seq;
        next();
      })
      .catch(error => {
        next(error);
      });
})

category.pre('validate',function(next){
    if(this.category_name){
        this.slug = this.category_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }
    next();
});
const Category = mongoose.model('Category',category);
module.exports = Category;