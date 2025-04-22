const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = require('../config');


function adminMiddleware(req, res, next) {
    const token=request.headers.token;
    const decodedToken=jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(!decodedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    req.userId = decodedToken.id;
    next();

}

module.exports ={
    adminMiddleware: adminMiddleware
}