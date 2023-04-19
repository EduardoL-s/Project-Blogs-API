const userControllers = require('./user.controllers');
const loginControllers = require('./login.controllers');
const categoryControllers = require('./category.controllers');
const blogPostControllers = require('./blogPost.controllers');

module.exports = {
    loginControllers,
    userControllers,
    categoryControllers,
    blogPostControllers,
};