const express = require('express');
const http = require('http');
require('dotenv').config();
 
const app = express();
const server = http.createServer(app);
 
app.get('/', (req, res) => {
  res.send('Hello, MERN batch 3 2026!');
});

app.use('/api/data', (req, res) => {
  res.status(404).send('Page not found');
});
 
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});