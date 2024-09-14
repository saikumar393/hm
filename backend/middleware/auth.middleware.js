const jwt = require('jsonwebtoken');

require('dotenv').config()

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_PVT_KEY);
        req.emp = decoded.emp;
        req.empId = decoded.id;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
}

module.exports = auth;