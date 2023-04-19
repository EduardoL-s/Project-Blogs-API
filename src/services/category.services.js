const { Category } = require('../models');

const insertCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return { status: 201, message: newCategory };
};

module.exports = { insertCategory };