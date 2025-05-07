const jwt = require('jsonwebtoken');

// Middleware for token verification
// This middleware checks if the request has a valid JWT token in the cookies
// and verifies it. If the token is valid, it attaches the user information to the request object.
// If the token is invalid or expired, it sends a 403 Forbidden response.
const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "Token is invalid or expired" });
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: "No token" });
    }
};

module.exports = verifyToken;