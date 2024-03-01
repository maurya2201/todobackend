const mongoose = require(`mongoose`);

const todoSchema = new mongoose.Schema({ 
  message: String, 
}) 
module.exports=mongoose.model("Todo", todoSchema);