const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next)=> {
  console.log(`[${new Date().toLocaleString()}] ${req.url}`)
  next();
})

app.get('/produto/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Detalhes do produto com ID ${productId}`);
});

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
