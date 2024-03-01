const express = require('express');
const {postController, getController, updateController, deleteController, getOneController} = require('../controller/controller');
const router = express.Router();

router.route('/')
.post(postController)
.get(getController);

router.route('/:id')
.put(updateController)
.delete(deleteController)
.get(getOneController)

module.exports=router;