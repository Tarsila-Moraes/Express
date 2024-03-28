const express = require('express');
const app = express();
const PORT = 3000;

app.get('/sobre', (req, res) => {
  res.send('Sobre: Este é um aplicativo criado com Express.js.');
});

app.get('/contato', (req, res) => {
  res.send('Contato: 0800-000-00');
});

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor Express está ouvindo na porta ${PORT}`);
});
