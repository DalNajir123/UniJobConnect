const jwt = require("jsonwebtoken");

const verifyJwtToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token == null) return res.sendStatus(401);

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified) {
            req.user = verified;
            next();
        } else {
            return res.status(401).send({
                success: false,
                message: "Invalid token",
            });
        }
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: "Invalid token",
        });
    }
}

module.exports = verifyJwtToken