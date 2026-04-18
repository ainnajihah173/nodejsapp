const express = require('express');
require('dotenv').config();
 
const app = express();
app.use(express.json());
 
app.get('/', (req, res) => {
  res.send('Hello, MERN batch 3 2026!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: "API is working!", timestamp: new Date() });
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});