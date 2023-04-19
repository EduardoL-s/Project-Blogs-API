const { Router } = require('express');
const { authToken } = require('../middlewares');
const { blogPostControllers } = require('../controllers');

const blogPostRouter = Router();

blogPostRouter.use(authToken);

blogPostRouter.get('/', blogPostControllers.findAllPosts);

module.exports = blogPostRouter;