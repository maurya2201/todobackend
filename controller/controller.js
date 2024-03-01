const todo = require('../schema/schema');
exports.postController = async (req, res, next) => {
  try {
    const result = await todo.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getController = async (req, res, next) => {
  try {
    const result = await todo.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.updateController = async (req, res, next) => {
  try {
    const result = await todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteController = async (req, res, next) => {
  try {
    const result = await todo.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getOneController = async (req, res, next) => {
  try {
    const result = await todo.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
