const mongoose = require("mongoose");

const menuItem = new mongoose.Schema({
  name: { type: String, required: [true, "Please Enter Menu Name"] },
  slug: { type: String, required: true, unique: true, index: true },
  delivered_from: { type: Date },
  delivered_to: { type: Date },
  delivey_time:{type:String,required:true},
  ratings:{type:Number,required:true},
  price:{type:Number,required:true},
  discount:{type:Number,requried:true},
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  images: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
});

menuItem.pre("validate", function (next) {
  if (this.name) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }
  next();
});
const MenuItem = mongoose.model("MenuItem", menuItem);
module.exports = MenuItem;
