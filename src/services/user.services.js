const { User } = require('../models');

const findAll = async () => User.findAll();

module.exports = {
    findAll,
};