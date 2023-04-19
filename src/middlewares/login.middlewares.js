const bodyLoginVerifications = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = { bodyLoginVerifications };