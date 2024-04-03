const express = require('express');
const app = express();
const userRoutes = require ('./userRoutes');
const PORT = 3000;

app.use('/users', userRoutes);

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.url}`)
  next();
});

app.get("/", function (req, res){
  res.sendFile(__dirname + "/public/index.html")

});

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
