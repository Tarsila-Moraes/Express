const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

let users = [];

router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    console.log('1', userId); // Adiciona um log para o ID fornecido na solicitação
     // Imprime a lista de usuários para verificar se está correta
     console.log('Lista de usuários:', users);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send ('Usuário não encontrado');
    }
});

router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...updateUser };
        res.status(200).json(users[index]);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        const deleteUser = users.splice(index, 1);
        res.status(200).send('Usuário com ID ${userId} excluído');
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

module.exports = router;