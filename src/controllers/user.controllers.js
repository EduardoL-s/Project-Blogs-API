const { userService } = require('../services');

const findAll = async (req, res) => {
    const result = await userService.findAll();
    return res.status(200).json(result);
};

const insertUser = async (req, res) => {
    const { body } = req;
    const result = await userService.insert(body);
    return res.status(result.status).json(result.message);
};

module.exports = { findAll, insertUser };