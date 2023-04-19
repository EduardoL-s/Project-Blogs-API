const { Router } = require('express');
const { bodyCategoryValidations, authToken } = require('../middlewares');
const { categoryControllers } = require('../controllers');

const categoryRouter = Router();

categoryRouter.use(authToken);

categoryRouter.post('/', bodyCategoryValidations, categoryControllers.createNewCategory);

module.exports = categoryRouter;