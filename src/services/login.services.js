const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const authenticate = async (email) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return { status: 400, message: { message: 'Invalid fields' } };
    }

    const payload = {
        id: user.dataValues.id,
        displayName: user.dataValues.displayName,
        email: user.dataValues.email,
        image: user.dataValues.image,
    };
    
    const tokenGen = generateToken(payload);
    return { status: 200, message: { token: tokenGen } };
};

module.exports = { authenticate };