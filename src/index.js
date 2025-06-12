// src/index.js
//archivo: index.js
// Importamos la aplicación de Express configurada en el archivo app.js
import app from "./app.js";

// Importamos la función para conectar a la base de datos desde db.js
import { connectDB } from "./db.js";

// Ejecutamos la conexión a la base de datos
connectDB();

// Iniciamos el servidor en el puerto 4000
app.listen(4000, () => {
  console.log('Servidor en puerto', 4000);
});

