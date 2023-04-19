const { blogPostService } = require('../services');

const findAllPosts = async (req, res) => {
    const result = await blogPostService.findAll();
    return res.status(200).json(result);
};

module.exports = { findAllPosts };