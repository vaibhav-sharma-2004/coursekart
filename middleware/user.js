const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require('../config');


function userMiddleware(req, res, next) {
    const token=request.headers.token;
    const decodedToken=jwt.verify(token,JWT_USER_PASSWORD);

    if(!decodedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    req.userId = decodedToken.id;
    next();

}

module.exports ={
    userMiddleware:userMiddleware
}