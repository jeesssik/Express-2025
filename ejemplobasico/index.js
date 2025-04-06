import express from 'express'; // Importa el módulo express
const app = express(); // Crea una instancia de la aplicación Express

app.get('/', (req, res) => { // Ruta raíz
  res.send('Hola mundo'); // Respuesta al cliente
});

app.listen(3000, () => { // Inicia el servidor en el puerto 3000
  console.log('Servidor escuchando en puerto 3000'); // Mensaje en consola
});
// Para ejecutar el servidor, usa el siguiente comando en la terminal:
// node index.js
// Luego, abre tu navegador y ve a http://localhost:3000c