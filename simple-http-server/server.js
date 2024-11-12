// server.js
const http = require('http');

// Create a server that handles requests
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set HTTP status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response header
  res.end('Hello, Node.js!'); // Send response body
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
    