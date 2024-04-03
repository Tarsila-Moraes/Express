const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.url}`)
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
console.log('Middleware express.static configurado para servir arquivos estáticos do diretório public');

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

app.listen(PORT, () => {
  console.log(`Servidor Express está ouvindo na porta ${PORT}`);
});
