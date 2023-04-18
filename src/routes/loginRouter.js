const { Router } = require('express');
const { loginControllers } = require('../controllers');
const { bodyVerifications } = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', bodyVerifications, loginControllers.signin);

module.exports = loginRouter;