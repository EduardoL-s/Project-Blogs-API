const { loginService } = require('../services');

const signin = async (req, res) => {
    const { email } = req.body;
    const login = await loginService.authenticate(email);
    return res.status(login.status).json(login.message);
};

module.exports = { signin };