import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      let decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      // console.log("decoded:", decodedToken);
      req.userId = decodedToken.id;
      next();
      return;
    } catch (error) {
      next(error);
      return;
    }
  }
  const error = new Error("Not authenticated");
  error.statusCode = 401;
  next(error);
};
