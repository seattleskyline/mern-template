const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestItemSchema = new Schema({
  name: String,
  image_url: String,
  price: Number,
});

const TestItem = mongoose.model("TestItem", TestItemSchema);
module.exports = TestItem;