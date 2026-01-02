
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

// Health Check
app.get('/', (req, res) => {
    res.send('Backend Server is running');
});

// Create User
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({ message: 'User added', user });
});

// Get Users
app.get('/users', (req, res) => {
    res.json(users);
});

// Update User
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users[id] = req.body;
    res.json({ message: 'User updated' });
});

// Delete User
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id, 1);
    res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
