const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyJWT = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
 
  if (!token) {
    return res.status(401).json({ error: "Unauthorized request" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  

    req.body = { ...req.body, user_id: decoded._id };

    next();
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return res.status(401).json({ msg: "Invalid token", error: error.message });
  }
};

module.exports = { verifyJWT };
