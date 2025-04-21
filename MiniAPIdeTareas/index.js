import express from 'express'; // Importa el módulo express
const app = express();
const PORT = 3000;

app.use(express.json()); // para poder leer JSON en POST y PUT

// array de objetos que son personas
const personas = [
  { "nombre": "Juan",
    "edad": 25,
    "ciudad": "Buenos Aires" },
  { "nombre": "Pedro",
    "edad": 30,
    "ciudad": "Córdoba" },
  { "nombre": "María",
    "edad": 28,
    "ciudad": "Rosario" },
  { "nombre": "Ana",
    "edad": 22,
    "ciudad": "Mendoza" }
];

app.get('/', (req, res) => {
    res.json('Bienvenido a la API de personas');
});

// GET - Ver todas las personas
app.get('/personas', (req, res) => {
  res.json(personas);
});

// POST - Agregar una persona
app.post('/personas', (req, res) => {
  const persona = req.body;
  if (!persona) return res.status(400).json({ error: 'Faltan datos de la persona' });

  personas.push(persona);
  res.status(201).json({ mensaje: 'Persona agregada', personas });
});

// PUT - Modificar una persona por índice
app.put('/personas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);
  const datos = req.body;

  // La idea de este PUT es que en body se aclare el dato a modificar y el nuevo valor
  if (isNaN(indice) || !personas[indice]) {
    return res.status(404).json({ error: 'Índice no válido' });
  }

  // Modificar los datos en el índice especificado
  for (const key in datos) {
    if (personas[indice].hasOwnProperty(key)) {
      personas[indice][key] = datos[key];
    }
  }

  res.json({ mensaje: `Persona modificada`, personas });
});

// DELETE - Borrar una persona por índice
app.delete('/personas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);

  if (isNaN(indice) || !personas[indice]) {
    return res.status(404).json({ error: 'Índice no válido' });
  }

  const eliminado = personas.splice(indice, 1);
  res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Para probar la API, puedes usar herramientas como Postman.
