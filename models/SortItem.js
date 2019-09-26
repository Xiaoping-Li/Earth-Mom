const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SortItemSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
  }, 
  image: {
    type: String,
  },
  material: {
    type: String,
  },
  instruction: {
    type: String,
  },
  description: {
    type: String,
  },
  classification: {
    type: String,
  },
  tag: [
    {
      type: String,
      lowercase: true,
    }
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
},
{runSettersOnQuery: true});

const SortItemModel = mongoose.model('sortItem', SortItemSchema);

module.exports = SortItemModel;