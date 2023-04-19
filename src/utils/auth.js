const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = {
    expiresIn: '30d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, configJWT);
    return token;
};

const validateToken = (token) => {
    const validated = jwt.verify(token, secretKey);
    return validated;
};

module.exports = { generateToken, validateToken };