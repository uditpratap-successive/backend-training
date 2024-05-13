const cookieParser = require("cookie-parser"); 
const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  cookieParser()(req, res, () => {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Token missing" });
    }
    try {
      const decoded = jwt.verify(token, "secret-key");
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
  });
};

module.exports = verify;
