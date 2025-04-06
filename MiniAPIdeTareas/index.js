import express from 'express'; // Importa el módulo express
const app = express();
const PORT = 3000;

app.use(express.json()); // para poder leer JSON en POST y PUT

let nombres = ['Ana', 'Luis', 'Carlos'];

app.get('/', (req, res) => {
    res.json('aca no hay nada che');
  });
// GET - Ver todos los nombres
app.get('/nombres', (req, res) => {
  res.json(nombres);
});

// POST - Agregar un nombre
app.post('/nombres', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta el nombre' });

  nombres.push(nombre);
  res.status(201).json({ mensaje: 'Nombre agregado', nombres });
});

// PUT - Modificar un nombre por índice
app.put('/nombres/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);
  const { nombre } = req.body;

  if (isNaN(indice) || !nombre || !nombres[indice]) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  nombres[indice] = nombre;
  res.json({ mensaje: 'Nombre actualizado', nombres });
});

// DELETE - Borrar un nombre por índice
app.delete('/nombres/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);

  if (isNaN(indice) || !nombres[indice]) {
    return res.status(404).json({ error: 'Índice no válido' });
  }

  const eliminado = nombres.splice(indice, 1);
  res.json({ mensaje: `Nombre eliminado: ${eliminado}`, nombres });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Para probar la API, puedes usar herramientas como Postman.
