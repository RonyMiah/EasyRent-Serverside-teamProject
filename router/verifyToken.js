const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const tokenHeader = req.headers.token;

  const token = tokenHeader.split(" ")[1];

  if (tokenHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      res.user = user;
      //leave the next middleware. it will go to router
      next();
    });
  } else {
    return res.status(401).json("You are not authorized");
  }
};

const tokenAndAuth = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json("You are not allowed to do that");
    }
  });
};

module.exports = { verifyToken, tokenAndAuth };
