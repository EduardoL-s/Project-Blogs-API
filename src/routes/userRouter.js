const { Router } = require('express');
const { userControllers } = require('../controllers');

const userRouter = Router();

userRouter.get('/', userControllers.findAll);

module.exports = userRouter;