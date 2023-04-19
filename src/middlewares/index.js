const { bodyLoginVerifications } = require('./login.middlewares');
const { bodyUserValidations } = require('./user.middlewares');
const { authToken } = require('./auth.middlewares');
const { bodyCategoryValidations } = require('./category.middlewares');

module.exports = {
    bodyLoginVerifications,
    bodyUserValidations,
    authToken,
    bodyCategoryValidations,
};