const jwt = require("jsonwebtoken");
export default function verifyJWT() { 
    const tokenHeader = req.headers.token;

  const token = tokenHeader.split(" ")[1];

  if (tokenHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json({error: "Invalid token"});
      }
      res.user = user;
      //leave the next middleware. it will go to router
      next();
    });
  } else {
    return res.status(401).json({error: "forbidden"});
  }
}