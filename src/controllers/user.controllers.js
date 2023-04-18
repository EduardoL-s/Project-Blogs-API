const { userService } = require('../services');

const findAll = async (req, res) => {
    const result = await userService.findAll();
    return res.status(200).json(result);
};

module.exports = { findAll };