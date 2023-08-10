const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
