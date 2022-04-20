// Boilerplate for Express //
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
// const taskController = require('./controllers/task');

// Middleware //
app.use(cors());
app.use(express.json());
// app.use('/tasks', taskController);


// Listening Route //
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
});