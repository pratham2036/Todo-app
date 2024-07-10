
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // for generating unique IDs
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors'); //CORS

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware


// In-memory data storage
let tasks = [];

// Routes
app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    task.id = uuidv4(); // Generate a unique ID for the task
    tasks.push(task);
    res.status(201).send('Task created successfully');
});

app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    tasks = tasks.map(task => (task.id === taskId ? updatedTask : task));
    res.send('Task updated successfully');
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks = tasks.filter(task => task.id !== taskId);
    res.send('Task deleted successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
