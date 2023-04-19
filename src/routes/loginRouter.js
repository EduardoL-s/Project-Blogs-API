const { Router } = require('express');
const { loginControllers } = require('../controllers');
const { bodyLoginVerifications } = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', bodyLoginVerifications, loginControllers.signin);

module.exports = loginRouter;