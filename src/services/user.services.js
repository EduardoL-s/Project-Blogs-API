const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const insert = async ({ displayName, email, password, image }) => {
    const users = await User.findOne({ where: { email } });

    if (users) {
        return { status: 409, message: { message: 'User already registered' } };
    }

    await User.create({ displayName, email, password, image });

    const tokenGen = generateToken({ displayName, email, password, image });
    return { status: 201, message: { token: tokenGen } };
};

const findAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const findById = async (id) => {
    const oneUser = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!oneUser) {
        return { status: 404, message: { message: 'User does not exist' } };
    }
    return { status: 200, message: oneUser };
};

module.exports = {
    findAll,
    insert,
    findById,
};