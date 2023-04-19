const { Router } = require('express');
const { userControllers } = require('../controllers');
const { bodyUserValidations } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', bodyUserValidations, userControllers.insertUser);

userRouter.get('/', userControllers.findAll);

module.exports = userRouter;