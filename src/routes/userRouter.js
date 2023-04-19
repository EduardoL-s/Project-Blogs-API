const { Router } = require('express');
const { userControllers } = require('../controllers');
const { bodyUserValidations, authToken } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', bodyUserValidations, userControllers.insertUser);

userRouter.get('/', authToken, userControllers.findAll);

module.exports = userRouter;