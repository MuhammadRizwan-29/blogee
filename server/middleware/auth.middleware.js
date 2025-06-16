import JWT from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    JWT.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: "Invalid User Token",
    });
  }
};

export default auth;
