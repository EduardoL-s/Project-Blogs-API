const { bodyLoginVerifications } = require('./login.middlewares');
const { bodyUserValidations } = require('./user.middlewares');

module.exports = { bodyLoginVerifications, bodyUserValidations };