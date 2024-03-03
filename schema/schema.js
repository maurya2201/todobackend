const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({ 
  message: { type: String, unique: true, index: true },
},
{ versionKey: false });
module.exports = mongoose.model('Todo', todoSchema);
