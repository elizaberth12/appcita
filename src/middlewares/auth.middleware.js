//src/middlewares/auth.middleware.js
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Token requerido" });

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) return res.status(401).json({ message: "Token inválido" });
      req.user = user; // contiene { id, rol }
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};