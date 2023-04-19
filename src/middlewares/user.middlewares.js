const bodyUserValidations = (req, res, next) => {
    const { body } = req;

    if (body.displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }

    const emailFormat = /\S+@\S+\.\S+/;

    if (!emailFormat.test(body.email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    if (body.password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }

    next();
};

module.exports = { bodyUserValidations };