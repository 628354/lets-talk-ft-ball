const jwt = require('jsonwebtoken');


exports.authentication = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized!',
        });
    }
    const token = authHeader.split(' ')[1];
    try {
        const user = jwt.verify(token, process.env.Secret_key);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized!',
        });
    }
};

