// Express
const express = require('express');
const app = express();

// esto es para que el servidor pueda recibir el endpoint de /api
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rutas
app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.send({ sum });
});

app.post("/sub", (req, res) => {
  const { a, b } = req.body;
  const sub = a - b;
  res.send({ sub });
});

app.post("/mul", (req, res) => {
  const { a, b } = req.body;
  const mul = a * b;
  res.send({ mul });
});

app.post("/div", (req, res) => {
  const { a, b } = req.body;
  const div = a / b;
  res.send({ div });
});

// Console log para bash
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
