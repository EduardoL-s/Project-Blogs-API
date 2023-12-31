const { Category } = require('../models');

const insertCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return { status: 201, message: newCategory };
};

const findAll = async () => Category.findAll({ order: [['id', 'ASC']] });

module.exports = { insertCategory, findAll };