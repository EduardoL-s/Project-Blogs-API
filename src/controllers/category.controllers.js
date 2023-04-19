const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
    const { name } = req.body;
    const result = await categoryService.insertCategory(name);
    return res.status(result.status).json(result.message);
};

module.exports = {
    createNewCategory,
};