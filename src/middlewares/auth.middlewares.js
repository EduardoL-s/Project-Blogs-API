const { validateToken } = require('../utils/auth');

const authToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }

    validateToken(authorization);

    next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { authToken };