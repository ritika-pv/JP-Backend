const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  });
  
const Counter = mongoose.model('Counter', CounterSchema);
const category =new mongoose.Schema({
    id:{type:Number},
    category_name:{type:String,required:[true,"Please Enter Category Name"]},
    slug:{type:String,required:true,unique:true,index:true},
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