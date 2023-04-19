const { Router } = require('express');
const { userControllers } = require('../controllers');
const { bodyUserValidations, authToken } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', bodyUserValidations, userControllers.insertUser);
userRouter.use(authToken);
userRouter.get('/', userControllers.findAll);
userRouter.get('/:id', userControllers.findById);

module.exports = userRouter;