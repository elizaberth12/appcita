// archivo: db.js
// Importamos mongoose, una librería que facilita la conexión y manipulación de bases de datos MongoDB desde Node.js
import mongoose from "mongoose";

// Definimos una función asincrónica para conectar a la base de datos
export const connectDB = async () => {
    try {
        // Intentamos conectarnos a la base de datos usando mongoose.connect
        await mongoose.connect("mongodb+srv://dbEliza:dbEliza@cluster0.nbaqiwx.mongodb.net/appcitas?retryWrites=true&w=majority&appName=Cluster0");

        // Si la conexión es exitosa, mostramos un mensaje en consola
        console.log(">>> DB Conectada");
    } catch (error) {
        // Si hay un error en la conexión, lo mostramos en consola
        console.log(error);
    }
};
