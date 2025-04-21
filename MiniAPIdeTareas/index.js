import express from 'express'; // Importa el módulo express
const app = express();
const PORT = 3000;

app.use(express.json()); // para poder leer JSON en POST y PUT

// array de objetos que son personas
const nombres = [
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
    res.json('aca no hay nada che');
  });
// GET - Ver todos los nombres
app.get('/nombres', (req, res) => {
  res.json(nombres);
});

// POST - Agregar un nombre
app.post('/nombres', (req, res) => {
  const  nombre  = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta el nombre' });

  nombres.push(nombre);
  res.status(201).json({ mensaje: 'Nombre agregado', nombres });
});

// PUT - Modificar un dato por índice
app.put('/nombres/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);
  const  dato  = req.body;

//la idea de este put es que en body se aclare el dato a modificar y el nuevo valor
  
    if (isNaN(indice) || !nombres[indice]) {
      return res.status(404).json({ error: 'Índice no válido' });
    }
  
    // Modificar el dato en el índice especificado
    for (const key in dato) {
      if (nombres[indice].hasOwnProperty(key)) {
        nombres[indice][key] = dato[key];
      }
    }
  
    res.json({ mensaje: `Dato modificado`, nombres });

  
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
