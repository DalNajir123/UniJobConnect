const { validationResult } = require('express-validator');

const bodyErrorSender = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array({ onlyFirstError: true })
        });
    };
    next()
}

module.exports = bodyErrorSender