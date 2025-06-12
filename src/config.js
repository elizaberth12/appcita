// src/config.js
// archivio: config.js
// Exportamos una constante llamada TOKEN_SECRET que contiene la clave secreta
// Esta clave se usa para firmar y verificar tokens JWT
// export const TOKEN_SECRET = 'some secret key';
export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mern-citas";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
