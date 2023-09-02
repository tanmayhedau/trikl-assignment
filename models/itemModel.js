const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  description:{
    type: String,
    require:true
  },
  price: {
    type: Number,
    require: true,
    trim: true
  },
  category: {
    type: String,
    require:true
  }
}, { timestamps: true })


module.exports = mongoose.model('item', itemSchema);