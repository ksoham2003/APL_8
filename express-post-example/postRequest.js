const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Handle POST requests at '/submit' endpoint
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.send(`Received name: ${name} and age: ${age}`);
});

// Start the server
app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
