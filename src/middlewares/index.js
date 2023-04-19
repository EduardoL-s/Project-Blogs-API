const { bodyLoginVerifications } = require('./login.middlewares');
const { bodyUserValidations } = require('./user.middlewares');
const { authToken } = require('./auth.middlewares');

module.exports = {
    bodyLoginVerifications,
    bodyUserValidations,
    authToken,
};