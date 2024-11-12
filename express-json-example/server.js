const express = require('express');
const app = express();

// Respond with JSON data
app.get('/', (req, res) => {
  res.json({
    message: "Hello, Express!",
    status: "success",
    timestamp: new Date().toISOString()
  });
});

// Start the server on port 3000
app.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});
