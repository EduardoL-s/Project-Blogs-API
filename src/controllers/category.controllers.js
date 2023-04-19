const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
    const { name } = req.body;
    const result = await categoryService.insertCategory(name);
    return res.status(result.status).json(result.message);
};

const findAllCategories = async (req, res) => {
    const result = await categoryService.findAll();
    return res.status(200).json(result);
};

module.exports = {
    createNewCategory,
    findAllCategories,
};